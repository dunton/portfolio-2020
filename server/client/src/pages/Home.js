import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import axios from 'axios';
import Header from '../components/Header';
import Project from '../components/Project';

const Home = props => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('/api/projects/findAll')
      .then(({ data }) => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <Header
        mainImage="https://s3.amazonaws.com/dunton-portfolio/media/ny.jpg"
        headshot="https://s3.amazonaws.com/dunton-portfolio/media/headshot.png"
      />
      {projects.map(project => {
        return <Project {...project} key={uuid()} />;
      })}

      <Project
        name="My Resume"
        link="/resume"
        image="https://s3.amazonaws.com/dunton-portfolio/media/resume.jpg"
      />
      <Project
        name="Contact Me!"
        link="contact"
        image="https://s3.amazonaws.com/dunton-portfolio/media/contact.jpg"
      />
      <a
        href="https://dunton-portfolio.s3.amazonaws.com/data/DuntonResume.pdf"
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
  }
`;

export default Home;
