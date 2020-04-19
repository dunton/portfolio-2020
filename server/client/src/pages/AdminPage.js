import React, { useContext } from 'react';
import LoginForm from '../components/admin/LoginForm';
import { AuthContext } from '../contexts/AuthContext';
import CurrentProjects from '../components/admin/CurrentProjects';

const Admin = props => {
  const { loggedIn } = useContext(AuthContext);
  if (!loggedIn) {
    return <LoginForm />;
  }
  return <CurrentProjects />;
};

export default Admin;
