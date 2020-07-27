import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory, Route } from 'react-router'

const PublicRoute = ({children, ...rest}) => {
  const { state } = useContext(AuthContext)
  const history = useHistory()
  useEffect(() => {
    if (state.user) {
      history.push('/dashboard')
    }
  }, [state.user, history])
  return (
    <div>
      <Route {...rest}>{children}</Route>
    </div>
  )
}


export default PublicRoute
