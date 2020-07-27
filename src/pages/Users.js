import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_USERS_QUERY } from '../graphql/queries'
import { toast } from 'react-toastify'
import Loader from '../Components/Loader'
import UserCard from '../Components/UserCard'
import { Link } from 'react-router-dom'

const Users = () => {
  const { data, loading, error } = useQuery(ALL_USERS_QUERY)
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])
  return (
    <div className="row">
      {
        loading ? <Loader /> : ''
      }
      {
        data && data.allUsers ? data.allUsers.map(user => {
          return <div className="col-md-2" key={`user-` + user._id}>
            <Link to={`/users/${user.username}`}>
              <UserCard user={user} ></UserCard>
            </Link>
          </div>
        }) : ''
      }
    </div>
  )
}

export default Users
