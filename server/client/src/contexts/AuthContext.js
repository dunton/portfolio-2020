import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = props => {
  const [loggedIn, setIsLoggedIn] = useState(true);
  const toggleLogin = () => {
    if (loggedIn) {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider value={{ loggedIn, toggleLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
