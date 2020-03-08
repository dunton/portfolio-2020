import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

const LoginForm = () => {
  const { toggleLogin } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const isVerified = window.localStorage.getItem('dunton_admin');
    if (isVerified) {
      toggleLogin(true);
    }
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/admin/login', { userName, password })
      .then(({ data }) => {
        if (data.verified) {
          window.localStorage.setItem('dunton_admin', 'true');
          toggleLogin(true);
        } else {
          setError(true);
        }
      })
      .catch(err => console.log(err));
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
          {error && <p className="error">wrong username or password</p>}
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
  .error {
    color: red;
    line-height: 1;
  }
`;

export default LoginForm;
