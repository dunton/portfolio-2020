import React from 'react';
import styled from 'styled-components';

const OpacityCurtain = ({ sidebarActive, toggleSideBarActive }) => {
  return (
    <Container active={sidebarActive} onClick={toggleSideBarActive}></Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: ${(props) => (props.active ? 50 : -1)};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: 0.25s ease-in;
  transition-property: opacity;
`;

export default OpacityCurtain;
