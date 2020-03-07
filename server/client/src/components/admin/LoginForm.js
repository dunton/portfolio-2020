import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

const LoginForm = () => {
  const { toggleLogin } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // axios.post('/admin/verify', { userName, password });
    toggleLogin(true);
  };
  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-field col s6">
            <input
              placeholder="user"
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="btn waves-effect waves-light" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: grey;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    background: white;
    form {
      padding: 20px;
      input {
        display: block;
        min-width: 300px;
        border: 1px solid grey;
      }
    }
  }
`;

export default LoginForm;
