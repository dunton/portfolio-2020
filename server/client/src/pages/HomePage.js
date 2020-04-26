import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import axios from 'axios';
import Header from '../components/Header';
import Project from '../components/Project';

const HomePage = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('/api/projects/findAll')
      .then(({ data }) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Header
        mainImage="https://dziey5wor84cr.cloudfront.net/media/ny.jpg"
        headshot="https://dziey5wor84cr.cloudfront.net/media/headshot.png"
      />
      {projects.map((project) => {
        return <Project {...project} key={uuid()} />;
      })}
      <Project
        name="Blog"
        link="/blog"
        local
        image="https://dziey5wor84cr.cloudfront.net/media/contact.jpg"
      />
      <a
        href="https://dziey5wor84cr.cloudfront.net/docs/DuntonResume.pdf"
        target="blank"
      >
        <ResumeButton>
          <p>my resume</p>
        </ResumeButton>
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const ResumeButton = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  height: 50px;
  width: 200px;
  background: #26a69a;
  color: white;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: white;
    p {
      color: #26a69a;
    }
  }
  p {
    text-decoration: none;
    color: white;
    max-height: 50px;
    padding: 0;
    font-size: 25px;
    font-family: 'Teko', sans-serif;
  }
`;

export default HomePage;
