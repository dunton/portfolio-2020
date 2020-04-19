import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

// images are 1440x400

const Project = ({ image, link, name, final, local }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => setWindowWidth(window.innerWidth), 200)
    );

    return () => {
      window.removeEventListener(
        'resize',
        debounce(() => setWindowWidth(window.innerWidth), 200)
      );
    };
  });

  let parallaxData = {
    start: 'self',
    startOffset: '20vw',
    end: 'self',
    endOffset: '50vh',
    easing: 'easeInSine',
    properties: [
      {
        startValue: 200,
        endValue: 0,
        property: 'translateX',
        unit: '',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  };

  const endAnimation = () => {
    setAnimationFinished(true);
  };

  const isMobile = windowWidth > 769 ? false : true;
  if (final) {
    parallaxData = {
      start: 'self',
      startOffset: '20vw',
      end: 'self',
      endOffset: '30vh',
      easing: 'easeInSine',
      properties: [
        {
          startValue: 200,
          endValue: 0,
          property: 'translateX',
          unit: '',
        },
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    };
  }

  if (local) {
    return (
      <Plx
        parallaxData={[parallaxData]}
        disabled={isMobile}
        onPlxEnd={endAnimation}
        freeze={animationFinished}
      >
        <ProjectWrapper backgroundImage={image}>
          <Link to={link}>
            <div className="mask"></div>
            <div className="text-holder">
              <h2>{name}</h2>
            </div>
          </Link>
        </ProjectWrapper>
      </Plx>
    );
  }
  return (
    <Plx
      parallaxData={[parallaxData]}
      disabled={isMobile}
      onPlxEnd={endAnimation}
      freeze={animationFinished}
    >
      <ProjectWrapper backgroundImage={image}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="mask"></div>
          <div className="text-holder">
            <h2>{name}</h2>
          </div>
        </a>
      </ProjectWrapper>
    </Plx>
  );
};

const ProjectWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  max-width: 100vw;
  @media screen and (max-width: 769px) {
    height: 200px;
  }
  a {
    text-decoration: none;
  }
  .mask {
    opacity: 0.15;
    height: 100%;
    width: 100%;
    position: absolute;
    background: black;
    &:hover {
      opacity: 0;
    }
  }
  .text-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 769px) {
      // display: block;
    }

    h2 {
      font-family: 'Teko', sans-serif;
      font-weight: 600;
      text-transform: lowercase;
      color: white;
      margin: 0;
      font-size: 40px;
      @media screen and (max-width: 769px) {
        font-size: 20px;
      }
    }
  }
`;

export default Project;
