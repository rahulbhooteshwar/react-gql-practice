import React from 'react'

const UserCard = ({ user }) => {
  const { username, about, images } = user
  const [defaultImage, firstImage] = images
  return (
    <div className="card text-center" style={{height: '100%', width: '200px'}}>
      <div className="card-body">
        <img className="img-card-top" src={firstImage ? firstImage.url: defaultImage.url} alt="" style={{height: '100px', width: '100px'}}/>

        <h4 className="text-primary">
          @{username}
        </h4>
        <hr />
        <small>{about}</small>
      </div>
    </div>
  )
}

export default UserCard
