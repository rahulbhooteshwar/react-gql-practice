import React, { useState } from 'react'
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import AuthForm from '../../Components/forms/AuthForm';
import Loader from '../../Components/Loader';


const Register = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url: process.env.REACT_APP_COMPLETE_REGISTRATION_URL,
      handleCodeInApp: true
    }
    await auth.sendSignInLinkToEmail(email, config);
    setLoading(false);
    //show toast
    toast.success("Please check your inbox for confirmation email!")
    // save user email in localstorage
    window.localStorage.setItem('emailFromRegistration', email);
    setEmail('');
    setDone(true);
  }
  return (
    <div className="p-5">
      <h4>Register</h4>
      {loading
        ? <Loader />
        : done
          ? <div className="alert alert-success" role="alert">
            Check your email for completing Registration
          </div>
          : <AuthForm {...{ email, setEmail, loading, handleSubmit, submitLabel: 'Proceed' }} />}

    </div>
  )
}

export default Register
