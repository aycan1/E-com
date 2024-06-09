import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';


const Wrapper = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated && <Header />}
      {isAuthenticated && <Sidebar />}
      {children}
    </div>
  );
};

export default Wrapper;
