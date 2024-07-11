import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './app.router';

const Routes: React.FC = () => {
  return (
    <Router>
        <AppRoutes />
    </Router>
  );
}

export default Routes;