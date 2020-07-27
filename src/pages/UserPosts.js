import React, { useEffect, useState, Fragment } from 'react'
import { GET_CURRENT_USER_POSTS_QUERY, TOTAL_USER_POSTS } from '../graphql/queries';
import { useQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import Loader from '../Components/Loader';
import Posts from '../Components/Posts';
import { Link } from 'react-router-dom';
import { DELETE_POST } from '../graphql/mutations';
import Pagination from '../Components/Pagination';

const UserPosts = () => {
  const [page, setPage] = useState(1)
  const pageSize = 6
  const { data: totalPostsByUserQueryData } = useQuery(TOTAL_USER_POSTS);

  const { data, error, loading } = useQuery(GET_CURRENT_USER_POSTS_QUERY, {
    variables: {
      page, pageSize
    }
  });
  const [deletePost] = useMutation(DELETE_POST, {
    update: (cache) => {
      cache.reset()
    },
    //  refetchQueries: [{query: TOTAL_POSTS}, {query: GET_POSTS_QUERY}, {query: GET_CURRENT_USER_POSTS_QUERY}]
  })
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])
  const deletePostHandler = async (_id) => {
    try {
      await deletePost({
        variables: {
          _id: _id
        }
      })
      toast.success('Deleted');
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <Link to={process.env.PUBLIC_URL + "/create-post"} className="btn btn-raised btn-success-outline float-right">Create New Post</Link>
        </div>
      </div>
      {
        totalPostsByUserQueryData ? <Pagination total={totalPostsByUserQueryData.totalPostsByUser} page={page} pageSize={pageSize} setPage={setPage} /> : ''
      }
      {
        loading
          ? <Loader />
          : <Fragment>

            {
              data
                ? <Posts colSize={4} showAuthor={false} posts={data.postsByCurrentUser} deletePostHandler={deletePostHandler} editable></Posts>
                : ''
            }
          </Fragment>
      }
    </div>
  )
}

export default UserPosts
