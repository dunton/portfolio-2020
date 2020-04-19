import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { SidebarContext } from '../contexts/SidebarContext';

const Blog = () => {
  let [posts, setPosts] = useState([]);
  const { sidebarActive, toggleSidebarActive } = useContext(SidebarContext);
  useEffect(() => {
    axios
      .get('https://dev.to/api/articles?username=ryan_dunton')
      .then(({ data }) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Hamburger onClick={toggleSidebarActive}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Sidebar active={sidebarActive} />
      <Container>
        <h1>Blog Posts</h1>
        <p>
          I currently do all my blogging on the Dev.to platform. These are links
          to some of my most recent posts.
        </p>
        <div>
          <div>
            {posts.map((post, i) => {
              const {
                title,
                description,
                readable_publish_date,
                positive_reactions_count,
                url,
              } = post;
              return (
                <a href={url} target="_blank" key={i}>
                  <PostCard>
                    <div className="post-info">
                      <h4>{title}</h4>
                      <p>{description}</p>
                      <p className="published">
                        published at: {readable_publish_date}
                      </p>
                    </div>
                    <div className="clap">
                      <div>{positive_reactions_count}</div>
                      <img
                        src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-heart-855b5a6263042e4c9448cf2cb0dd2e201598b77b1e3f1dc041492bc0128d9fb8.png"
                        alt="heart"
                      />
                    </div>
                  </PostCard>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  font-family: 'Teko', sans-serif;

  h1 {
    text-align: center;
    font-family: 'Teko', sans-serif;
    font-weight: 600;
    font-size: 50px;
  }
  > p {
    text-align: center;
    font-family: 'Teko', sans-serif;
    font-weight: 300;
    max-width: 1600px;
    font-size: 30px;
    width: 90%;
    margin: 20px auto;
  }
  > div {
    width: 60%;
    @media screen and (max-width: 769px) {
      width: 100%;
      padding: 0 20px 0 10px;
    }

    margin: 100px auto 50px;
    > div {
      display: flex;
      width: 100%;
      margin: 100px auto;
      max-width: 1200px;
      flex-wrap: wrap;
      @media screen and (max-width: 769px) {
        flex-direction: column;
      }
      > div {
        width: 45%;
        padding: 20px;
      }
    }
  }

  a {
    max-width: 50%;
    color: black;
    text-decoration: none;
    @media screen and (max-width: 769px) {
      max-width: 100%;
    }
  }
`;

const PostCard = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  @media screen and (max-width: 769px) {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  background: black;
  color: white;
  padding: 20px;
  margin: 20px;
  box-shadow: 10px 10px #26a69a;
  border: 1px solid black;

  &:hover {
    color: #26a69a;
    background: white;
    border: 1px solid #26a69a;
  }

  .post-info {
    h4 {
      font-family: 'Teko', sans-serif;
      font-weight: 600;
      font-size: 30px;
    }

    p {
      font-family: 'Teko', sans-serif;
      font-weight: 300;
      font-size: 20px;
    }

    .published {
      position: absolute;
      bottom: 20px;
      margin: 0 0 5px;
    }
  }

  .clap {
    position: absolute;
    bottom: 10px;
    right: 20px;
    div {
      position: absolute;
      left: 50%;
      top: 25%;
      color: white;
      transform: translate(-50%);
    }
    img {
      width: 50px;
    }
  }
`;

const Hamburger = styled.div`
  position: fixed;
  left: 20px;
  top: 20px;
  cursor: pointer;

  div {
    height: 5px;
    width: 40px;
    background: black;
    margin: 7px 0;
  }
`;

export default Blog;
