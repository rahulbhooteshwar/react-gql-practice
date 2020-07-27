import React, { useState } from 'react'
import Loader from '../../Components/Loader';
import AuthForm from '../../Components/forms/AuthForm';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url: process.env.REACT_APP_CHANGE_PASSWORD_REDIRECT_URL
    }
    await auth.sendPasswordResetEmail(email, config);
    setLoading(false);
    //show toast
    toast.success("Please check your inbox for password reset email!")
    setEmail('');
    setDone(true);
  }
  return (
    <div className="p-5">
      <h4>Forgot Password</h4>
      {loading
        ? <Loader />
        : done
          ? <div className="alert alert-success" role="alert">
            Check your email for Password Reset Link
          </div>
          : <AuthForm {...{ email, setEmail, loading, handleSubmit, submitLabel: 'Proceed' }} />}
    </div>
  )
}

export default ForgotPassword
