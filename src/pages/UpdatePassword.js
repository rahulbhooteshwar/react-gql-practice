import React, { useState } from 'react'
import AuthForm from '../Components/forms/AuthForm';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

const UpdatePassword = () => {
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await auth.currentUser.updatePassword(password);
      setLoading(false);
      toast.success('Password Updated');
    } catch (error) {
      toast.error(error.message)
    }


  }
  return (
    <div>
      <h4>
        Update Password
      </h4>
      <AuthForm {...{password, setPassword, loading, handleSubmit, submitLabel: 'Update Password', showPassword: true, hideEmail: true }} >
      </AuthForm>
    </div>
  )
}

export default UpdatePassword
