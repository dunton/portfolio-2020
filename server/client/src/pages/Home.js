import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import axios from 'axios';
import Header from '../components/Header';
import Project from '../components/Project';
import { projectData } from '../components/ProjectData';

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
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default Home;
