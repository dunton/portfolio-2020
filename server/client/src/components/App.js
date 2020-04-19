import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import BlogPage from '../pages/BlogPage';
import { AuthContextProvider } from '../contexts/AuthContext';
import { SidebarContextProvider } from '../contexts/SidebarContext';

const App = () => {
  return (
    <AuthContextProvider>
      <SidebarContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/admin">
              <AdminPage />
            </Route>
            <Route path="/blog">
              <BlogPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </SidebarContextProvider>
    </AuthContextProvider>
  );
};

export default App;
