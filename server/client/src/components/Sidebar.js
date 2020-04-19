import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = ({ active }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('/api/projects/findAll')
      .then(({ data }) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Container active={active}>
      <div>
        <h3>
          <Link to="/">Home</Link>
        </h3>
      </div>
      <div>
        {projects.map((project, i) => {
          const { url, name } = project;
          return (
            <div className="project" key={i}>
              <a href={url}>{name}</a>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  background: white;
  margin-left: ${(props) => (props.active ? 0 : '-70vw')};
  transition: 0.25s ease-in;
  width: 400px;
  max-width: 60vw;
  z-index: 100;
  top: 0;
  > div {
    width: 90%;
    text-align: center;

    h3 a {
      color: black;
      text-decoration: none;
      font-family: 'Teko', sans-serif;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        border-bottom: 3px solid #26a69a;
      }
    }

    .project {
      margin: 50px auto;
      max-width: 90%;
      a {
        color: black;
        text-decoration: none;
        font-family: 'Teko', sans-serif;
        font-weight: 300;
        font-size: 22px;
        cursor: pointer;
        &:hover {
          border-bottom: 3px solid #26a69a;
        }
      }
    }
  }

  color: black;
`;

export default Sidebar;
