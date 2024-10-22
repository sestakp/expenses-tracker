import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Profile from '../pages/profile/Profile';


const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/profile' element={<Profile/>} />
      {/*<Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />*/}
    </Routes>
  );
};

export default AppRouter;