import * as React from 'react';
import { Routes, Route } from "react-router-dom"

import SignInSide from './pages/SignInSide';
import SignUp from './pages/SignUp';

import { auth } from './firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user.email}</p>
      <button
        onClick={() => {
          signOut(auth)
        }}
      >
        logout
      </button>
    </div>
  )
}

const Router = () => {
    // hooks, variables, functions, etc.
    const [user] = useAuthState(auth);

    // render at the bottom always
    return (
    <Routes>
        {user && <>
          {/* All routes which require login */}
          <Route path="/" element={ <Dashboard /> } />
        </>}

        {!user && <>
          {/* All routes which require logged out */}
          <Route path="/" element={ <SignInSide /> } />
          <Route path="/signup" element={ <SignUp /> } />
        </>}
    </Routes>
    );
};
  
export default Router;