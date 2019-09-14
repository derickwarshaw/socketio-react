import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';


interface IProps extends RouteProps {
  isAuthed: boolean;
}

const ProtectedRoute: React.FC<IProps> = ({ path, component, isAuthed }) => {
  return isAuthed
    ? <Route exact path={path} component={component} />
    : <Redirect to='/login' />;
};

export default ProtectedRoute;
