import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { uuid } from "uuidv4";
// import axios from "axios";
import Header from "../components/Header";
import Project from "../components/Project";

const HomePage = (props) => {
  // const [projects, setProjects] = useState([]);

  const projects = [
    {
      _id: "5e7baea111eab21837f4ec99",
      name: "Furthermore (features and upkeep)",
      link: "https://furthermore.equinox.com/",
      image: "https://dziey5wor84cr.cloudfront.net/media/furthermore.jpg",
      __v: 0,
    },
    {
      _id: "5e7bae5411eab21837f4ec98",
      name: "Hawaii | Naturally Fit",
      link: "https://furthermore.equinox.com/hawaii",
      image:
        "https://dziey5wor84cr.cloudfront.net/media/furthermore-hawaii.jpg",
      __v: 0,
    },
    {
      _id: "5e7bad9e11eab21837f4ec97",
      name: "Tech Mahindra | Efficacy Index",
      link: "https://partners.wsj.com/tech-mahindra/efficacy-index/",
      image: "https://dziey5wor84cr.cloudfront.net/media/news-detail-img.jpg",
      __v: 0,
    },
    {
      _id: "5e7bacff11eab21837f4ec96",
      name: "Service Now | Work Reimagined",
      link: "https://partners.wsj.com/servicenow/work-reimagined",
      image: "https://dziey5wor84cr.cloudfront.net/media/service_now.jpg",
      __v: 0,
    },
    {
      _id: "5e7bace111eab21837f4ec95",
      name: "Oscar Watch Tracker",
      link: "http://www.theoscarwatch.com/",
      image: "https://dziey5wor84cr.cloudfront.net/media/oscar-watch.jpg",
      __v: 0,
    },
    {
      _id: "5e7bacb111eab21837f4ec94",
      name: "Cole Haan | Chasing Ambition",
      link: "https://partners.wsj.com/chasing-ambition",
      image: "https://dziey5wor84cr.cloudfront.net/media/cole-haan.png",
      __v: 0,
    },
    {
      _id: "5e7bab7e067e421670cbfa2f",
      name: "Weather Forecaster",
      link: "/weather",
      image: "https://dziey5wor84cr.cloudfront.net/media/weather.jpg",
      __v: 0,
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get('/api/projects/findAll')
  //     .then(({ data }) => setProjects(data))
  //     .catch((err) => console.error(err));
  // }, []);

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
    font-family: "Teko", sans-serif;
  }
`;

export default HomePage;
