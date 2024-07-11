import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Private from './Private';

// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' element={<Private> <Home /> </Private>} />
    </Routes>
  );
}

export default AppRoutes;