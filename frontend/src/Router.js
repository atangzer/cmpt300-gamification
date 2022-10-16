import * as React from 'react';
import { Routes, Route } from "react-router-dom"

import SignInSide from './pages/SignInSide';
import SignUp from './pages/SignUp';

const Router = () => {
    return (
    <Routes>
        <Route path="/" element={ <SignInSide /> } />
        <Route path="signup" element={ <SignUp /> } />
    </Routes>
    );
};
  
  export default Router;      