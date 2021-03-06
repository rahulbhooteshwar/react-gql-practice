import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import UserPosts from './UserPosts'

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-3">
        <div className="list-group">
          <NavLink className="text-center btn-lg btn-link btn-success" activeClassName="active" to={`/dashboard`} exact>Profile</NavLink>
          <NavLink className="text-center btn-lg btn-link btn-success" activeClassName="active" to={`/dashboard/update-password`}>Update Password</NavLink>
          <NavLink className="text-center btn-lg btn-link btn-success" activeClassName="active" to={`/dashboard/user-posts`}>Posts</NavLink>
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content">
          <Switch>
            <Route path={`/dashboard/update-password`}>
              <UpdatePassword />
            </Route>
            <Route path={`/dashboard/user-posts`}>
              <UserPosts/>
            </Route>
            <Route path={`/dashboard`}>
              <Profile />
            </Route>
          </Switch>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
