import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <HeaderContainer backgroundImage={this.props.mainImage}>
        <div className="content">
          <img src={this.props.headshot} alt="headshot" />
          <h1>Ryan Dunton</h1>
          <h4>Software Developer</h4>
          <p>
            I'm a software developer with 3+ years experience creating cutting
            edge experiences on the web. Below are links to some of my work, my
            resume and my contact information. Enjoy!
          </p>
        </div>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 769px) {
    height: 50vh;
  }
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  .content {
    color: white;
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: flex-end;
    padding-left: 50px;
    @media (max-width: 769px) {
      justify-content: center;
      align-items: center;
      padding-left: 0;
    }

    h1 {
      font-size: 4vw;
      margin: 10px 0 0;
      font-family: 'Teko', sans-serif;
      font-weight: 600;
      @media (max-width: 769px) {
        font-size: 25px;
      }
    }
    h4 {
      margin-top: 5px;
      font-size: 3vw;
      margin: 0;
      font-family: 'Teko', sans-serif;
      @media (max-width: 769px) {
        font-size: 20px;
      }
    }
    p {
      font-size: 1.5vw;
      margin-bottom: 0;
      max-width: 50%;
      font-family: 'Teko', sans-serif;
      @media (max-width: 769px) {
        display: none;
      }
    }
    img {
      width: 100px;
      background: white;
      border-radius: 25px;
      @media (max-width: 769px) {
        width: 120px;
        margin-bottom: 5px;
      }
    }
  }
`;

export default Header;
