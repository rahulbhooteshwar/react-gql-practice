import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { useMutation } from '@apollo/client';
import AuthForm from '../../Components/forms/AuthForm';
import Loader from '../../Components/Loader';
import { USER_CREATE } from '../../graphql/mutations';

const CompleteRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const [createUser] = useMutation(USER_CREATE);

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailFromRegistration'))
  }, [history])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      toast.error("Email & Password is required");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(email, window.location.href);
      if (result.user.emailVerified) {
        window.localStorage.removeItem('emailFromRegistration');
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: { email: user.email, token: idTokenResult.token }
        });
        // update the user in our DB
        await createUser();
        history.push('/dashboard')

      } else {
        toast.error("Email not verified");
      }
    } catch (error) {
      console.log('Error in registration completion', error.message);
      setLoading(false);
      toast.error(error.message);
    }
  }
  return (
    <div className="p-5">
      <h4>Complete Registration</h4>

      {loading ? <Loader/> :<AuthForm {...{ email, password, setEmail, setPassword, loading, handleSubmit, submitLabel: 'Complete Registration', showPassword: true }}/>}

    </div>
  )
}

export default CompleteRegistration
