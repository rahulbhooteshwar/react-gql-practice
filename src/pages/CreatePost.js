import React, { useState } from 'react'
import CreateUpdatePostForm from '../Components/forms/CreateUpdatePostForm'
import { useMutation } from '@apollo/client';
import { POST_CREATE } from '../graphql/mutations';
import Loader from '../Components/Loader';
import { toast } from 'react-toastify';
// import { GET_POSTS_QUERY, GET_CURRENT_USER_POSTS_QUERY, TOTAL_POSTS } from '../graphql/queries';
// import { useHistory } from 'react-router';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  const [createPost] = useMutation(POST_CREATE, {
    update: (cache) => {
      cache.reset()
    },
    // refetchQueries: [
    //   { query: GET_POSTS_QUERY },
    //   { query:TOTAL_POSTS },
    //   { query: GET_CURRENT_USER_POSTS_QUERY }]
    // update: (cache, { data: { postCreate } }) => {
    //   const {postsByCurrentUser} = cache.readQuery({ query: GET_CURRENT_USER_POSTS_QUERY })
    //   const {allPosts} = cache.readQuery({ query: GET_POSTS_QUERY })
    //   console.log("==============>", postsByCurrentUser, allPosts)
    //   cache.writeQuery({
    //     query: GET_CURRENT_USER_POSTS_QUERY,
    //     data: {
    //       postsByCurrentUser: [postCreate, ...postsByCurrentUser]
    //     }
    //   })
    //   cache.writeQuery({
    //     query: GET_POSTS_QUERY,
    //     data: {
    //       allPosts: [postCreate, ...allPosts]
    //     }
    //   })
    // }
  });
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      await createPost({
        variables: {
          input: { title, content, image }
        }
      })
      toast.success('Post Created')
      setLoading(false)
      setTitle('')
      setContent('')
      setImage(null)
      //history.push('/dashboard/user-posts')
    } catch (error) {
      toast.error(error.message)
      console.log()
      setLoading(false)
    }

  }
  return (
    <div>
      {
        loading ? <Loader /> : <CreateUpdatePostForm {...{ title, setTitle, content, image, setContent, setImage, handleSubmit }} />
      }

    </div>
  )
}

export default CreatePost
