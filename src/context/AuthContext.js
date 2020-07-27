import React, { useReducer, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import Loader from '../Components/Loader';

// reducer
const firebaseReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, user: action.payload };
    default: return state;
  }
}
//state
const initialState = {
  user: null
}
// create context
const AuthContext = createContext();

// context provider
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(firebaseReducer, initialState);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: { email: user.email, token: idTokenResult.token }
        });
        setLoading(false);
      } else {
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: null
        });
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);
  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{loading ? <Loader full background/>: children}</AuthContext.Provider>
}
// export
export { AuthProvider, AuthContext };