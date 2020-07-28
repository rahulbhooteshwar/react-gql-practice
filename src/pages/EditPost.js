import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useQuery, useMutation } from '@apollo/client';
import { SINGLE_POST, GET_CURRENT_USER_POSTS_QUERY, GET_POSTS_QUERY } from '../graphql/queries';
import { toast } from 'react-toastify';
import Loader from '../Components/Loader';
import CreateUpdatePostForm from '../Components/forms/CreateUpdatePostForm';
import { UPDATE_POST } from '../graphql/mutations';
import omitDeep from 'omit-deep-lodash'


const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [submitting, setSubmitting] = useState(false)

  const { _id } = useParams()
  const { data, loading, error } = useQuery(SINGLE_POST, {
    variables: {
      _id: _id
    }
  })
  const [updatePost] = useMutation(UPDATE_POST, {
    update: (cache) => {
      cache.reset()
    }
  })
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
    if (data) {
      console.log('setting initial data....')
      setTitle(data.singlePost.title)
      setContent(data.singlePost.content)
      if (!data.singlePost.image.url.includes('placeholder')) {
        setImage(data.singlePost.image)
      }
    }
  }, [data, error])
  const handleSubmit = async (e) => {
    setSubmitting(true)
    e.preventDefault()
    try {
      await updatePost({
        variables: {
          _id,
          input: {
            title,
            content,
            image: omitDeep(image, ['__typename'])
          }
        },
        // refetchQueries: [{ query: GET_CURRENT_USER_POSTS_QUERY }, { query: GET_POSTS_QUERY }]
      })
      toast.success('Updated Post')
      setSubmitting(false)
    } catch (error) {
      toast.error(error.message)
      setSubmitting(false)
    }

  }
  return (
    <div>
      <h4>Edit Post</h4>
      {
        loading || submitting ? <Loader /> : <CreateUpdatePostForm {...{ title, setTitle, content, image, setContent, setImage, handleSubmit }} />
      }
    </div>
  )
}

export default EditPost
