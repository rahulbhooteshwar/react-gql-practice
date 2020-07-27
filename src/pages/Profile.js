import React, { useMemo, useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { toast } from 'react-toastify'
import { PROFILE_QUERY, ALL_USERS_QUERY, GET_POSTS_QUERY } from '../graphql/queries'
import Loader from '../Components/Loader'
import { PROFILE_UPDATE } from '../graphql/mutations'
import Resizer from 'react-image-file-resizer'
import omitDeep from 'omit-deep-lodash'
import ProfileForm from '../Components/forms/ProfileForm'
import ImageManager from '../Components/ImageManager'
import { useAuthHttp } from '../util/http'

const Profile = () => {
  const http = useAuthHttp();
  const [profile, setProfile] = useState({
    name: '',
    username: '',
    email: '',
    about: '',
    images: []
  })
  const [loading, setLoading] = useState(false)
  const [processingImage, setProcessingImage] = useState(false)
  const { data, loading: profileLoading, error: profileLoadError } = useQuery(PROFILE_QUERY)
  const [updateProfile] = useMutation(PROFILE_UPDATE, {
    refetchQueries: [{ query: PROFILE_QUERY }, { query: ALL_USERS_QUERY }, { query: GET_POSTS_QUERY }]
  })
  useEffect(() => {
    if (profileLoadError) {
      toast.error(profileLoadError.message)
    }
  }, [profileLoadError])
  useMemo(() => {
    if (data && data.profile) {
      const modified = omitDeep(data, ['__typename'])
      setProfile(
        {
          name: modified.profile.name,
          username: modified.profile.username,
          email: modified.profile.email,
          about: modified.profile.about,
          images: modified.profile.images
        }
      )
    }
  }, [data])
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await updateProfile(
        {
          variables: { input: { username: profile.username, name: profile.name, about: profile.about } }
        }
      )
      toast.success('Profile Updated')
      setLoading(false)
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }
  const resizeAndUploadHandler = (event) => {
    setProcessingImage(true)
    var fileInput = false
    if (event.target.files[0]) {
      fileInput = true
    }
    if (fileInput) {
      Resizer.imageFileResizer(
        event.target.files[0],
        300,
        300,
        'JPEG',
        100,
        0,
        async (output) => {
          try {
            const { data } = await http.post(`${process.env.REACT_APP_SERVER_URL}/uploadImages`,
              { image: output })
            const updatedImages = [...profile.images, data];
            // update in DB
            await updateProfile(
              {
                variables: { input: { images: updatedImages } }
              }
            )
            // update on UI
            setProfile({ ...profile, images: updatedImages })
            toast.info('Uploaded')
            setProcessingImage(false)
          } catch (error) {
            toast.error(error.message)
            setProcessingImage(false)
          }
        },
        'base64'
      );
    }
  }

  const deleteImageHandler = async (id) => {
    setProcessingImage(true)
    try {
      const { data } = await http.post(`${process.env.REACT_APP_SERVER_URL}/removeImage`,
        { public_id: id })
      if (data.success) {
        const filteredImages = profile.images.filter(image => {
          return image.public_id !== id;
        })
        // update images in DB
        await updateProfile(
          {
            variables: { input: { images: filteredImages } }
          }
        )
        // update images on UI
        setProfile({ ...profile, images: filteredImages })
        toast.info('Deleted')
      } else {
        toast.error(data.error.message)
      }
      setProcessingImage(false)
    } catch (error) {
      toast.error(error.message)
      setProcessingImage(false)
    }
  }

  return (
    <div>
      {
        profileLoading
          ? <Loader /> :
          <div className="row jumbotron">
            <div className="col-md-6 jumbotron bg-dark text-white border border-success">
              <ProfileForm {...{ handleSubmit, profile, setProfile, loading, profileLoading }} />
            </div>
            <div className="col-md-6 jumbotron bg-light">
              <ImageManager {...{ images: profile.images, processingImage, resizeAndUploadHandler, deleteImageHandler }} />
            </div>
          </div>
      }
    </div>
  )
}

export default Profile
