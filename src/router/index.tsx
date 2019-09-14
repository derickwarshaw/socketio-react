import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import ProtectedRoute from './protected-route';

import { IRootState } from 'state/store';


const TheRouter: React.FC = () => {
  const { user } = useSelector((state: IRootState) => state.userReducer);
  const isAuthed = user ? true : false;

  return (
    <Router>
      <ProtectedRoute path='/' component={Home} isAuthed={isAuthed} />
      <Route path='/login' component={Login} />
    </Router>
  );
};

export default TheRouter;
