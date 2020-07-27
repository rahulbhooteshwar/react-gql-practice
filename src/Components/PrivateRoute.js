import React, {  useContext, Fragment } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Route } from 'react-router';
import LoadingWithRedirect from './LoadingWithRedirect';

const PrivateRoute = ({ children, ...rest }) => {
  const { state } = useContext(AuthContext);
  const { user } = state;
  return (
    <Fragment>
      {user
        ? <Route {...rest}>{children}</Route>
        : <LoadingWithRedirect path='/login' countFrom='5'/>}
    </Fragment>
  )
}

export default PrivateRoute
