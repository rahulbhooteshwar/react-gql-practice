import React, { Fragment } from 'react'

const ProfileForm = ({handleSubmit, profile, setProfile, loading, profileLoading}) => {
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text"
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            disabled={loading || profileLoading}
            className="form-control text-white" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            disabled={loading || profileLoading}
            className="form-control text-white" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="text"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            disabled
            className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="about">About</label>
          <textarea id="about" type="text"
            value={profile.about}
            onChange={(e) => setProfile({ ...profile, about: e.target.value })}
            disabled={loading || profileLoading}
            className="form-control text-white"
            rows="5"
          />
        </div>
        <button disabled={loading || profileLoading} className="btn btn-outline-success ">
          {!loading ? 'Update' : "Please Wait..."}
        </button>
      </form>
    </Fragment>
  )
}

export default ProfileForm
