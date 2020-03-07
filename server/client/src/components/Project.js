import React from "react";
import styled from "styled-components";

// images are 1440x400

const Project = props => {
  const { image, link, name } = props;
  return (
    <ProjectWrapper backgroundImage={image}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="mask"></div>
        <div className="text-holder">
          <h2>{name}</h2>
        </div>
      </a>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.backgroundImage});
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
