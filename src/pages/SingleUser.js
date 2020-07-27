import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { PUBLIC_PROFILE_QUERY } from '../graphql/queries'
import { toast } from 'react-toastify'
import Loader from '../Components/Loader'
import { useQuery } from '@apollo/client'

const SingleUser = () => {
  const { username } = useParams()
  const { data, loading, error } = useQuery(PUBLIC_PROFILE_QUERY, { variables: { username: username } })
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])
  return (
    <div>
      {
        loading ? <Loader /> : ''
      }
      {
        data
          ? <div className="jumbotron">
            <h1 className="display-4">{data.publicProfile.name}</h1>
            <p className="lead">@{data.publicProfile.username}</p>
            <hr className="my-4" />
            <p>{data.publicProfile.about}</p>
            <h4>Photos of {data.publicProfile.name}</h4>
            {
              data.publicProfile.images.map(({ url }) => <img style={{height: '100px', width: '100px'}} className="img-thumbnail" alt="" src={url}/>)
            }
          </div>
          : ''
      }
    </div>
  )
}


export default SingleUser
