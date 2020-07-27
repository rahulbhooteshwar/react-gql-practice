import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase';
import Search from './Search';


const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const history = useHistory();
  const { user } = state;
  const logout = () => {
    auth.signOut();
    dispatch({
      type: 'LOGGED_IN_USER',
      payload: null
    });
    history.push('/login');
  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link className="navbar-brand text-white" to={"/"}>
          My App
        </Link>
        <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-tabs navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeClassName="active" to={"/users"}>Users <span className="sr-only">(current)</span></NavLink>
            </li>
            {
              user
                ? <React.Fragment>

                  <li className="nav-item">
                    <NavLink className="nav-link text-white" activeClassName="active" to={"/dashboard"}>Dashboard <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item float-right">
                    <span style={{ 'cursor': 'pointer' }} className="nav-link text-white" onClick={logout}> <span className="sr-only">(current)</span>
                    Logout
                  </span>
                  </li>
                </React.Fragment>
                : <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white" activeClassName="active" to={"/login"}>Login <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white" activeClassName="active" to={"/register"}>Register <span className="sr-only">(current)</span></NavLink>
                  </li>
                </React.Fragment>
            }

          </ul>
          <div className="ml-auto">
            <Search></Search>
          </div>
        </div>
      </nav>
    </React.Fragment>

  )
}

export default Navbar
