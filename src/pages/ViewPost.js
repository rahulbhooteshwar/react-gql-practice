import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'
import { SINGLE_POST } from '../graphql/queries';
import Loader from '../Components/Loader';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewPost = () => {
  const { _id } = useParams();
  const { data, loading, error } = useQuery(SINGLE_POST, {
    variables: {
      _id: _id
    }
  })
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])
  return (
    <div className="container">
      {
        loading ? <Loader />
          : <div className="jumbotron">
            <img style={{ width: '800px' }} src={data.singlePost.image.url} alt="" />
            <h1 className="m-auto display-4">{data.singlePost.title}</h1>
            <p className="lead">By: <Link to={`/users/${data.singlePost.postedBy.username}`}>{data.singlePost.postedBy.name}</Link></p>
            <hr className="my-4" />
            <p className="lead">
              {data.singlePost.content}
            </p>
          </div>
      }
    </div>
  )
}

export default ViewPost
