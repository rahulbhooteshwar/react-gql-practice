import React, { useState, useContext, Fragment } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { auth, googleAuthProvider } from '../../firebase';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import AuthForm from '../../Components/forms/AuthForm';
import Loader from '../../Components/Loader';
import { Link } from 'react-router-dom';
import { USER_CREATE } from '../../graphql/mutations';

const Login = () => {
  const [createUser] = useMutation(USER_CREATE);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: 'LOGGED_IN_USER',
        payload: { email: user.email, token: idTokenResult.token }
      });
      // send user info to server, update/create user
      await createUser();
      history.push('/dashboard');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }
  const loginWithGoogle = async () => {
    try {
      setLoading(true)
      const { user } = await auth.signInWithPopup(googleAuthProvider);
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: 'LOGGED_IN_USER',
        payload: { email: user.email, token: idTokenResult.token }
      });
      // send user info to server, update/create user
      await createUser();
      history.push('/dashboard');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }
  return (
    <div className="p-5">
      <h4>Login</h4>

      {loading
        ? <Loader full background/>
        : <Fragment>
          <button className="btn  btn-outline-danger mt-5" onClick={loginWithGoogle}>
            Login with Google
          </button>
          <div>Or</div>
          <AuthForm {...{ email, password, setEmail, setPassword, loading, handleSubmit, submitLabel: 'Login using email & password', showPassword: true }} >
            <Link to={"/forgot-password"}>
              <button className="btn btn-outline-secondary">Forgot Password</button>
            </Link>
          </AuthForm>
        </Fragment>
      }

    </div>
  )
}

export default Login
