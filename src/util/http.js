import axios from 'axios'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// custom hook
export const useAuthHttp = () => {
  const { state } = useContext(AuthContext)
  return axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: { 'authtoken': state.user.token }
  });
 }