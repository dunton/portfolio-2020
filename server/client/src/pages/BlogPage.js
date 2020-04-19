import React, { useContext } from 'react';
import Blog from '../components/Blog';
import OpacityCurtain from '../components/OpacityCurtain';
import { SidebarContext } from '../contexts/SidebarContext';

const BlogPage = (props) => {
  const { sidebarActive, toggleSidebarActive } = useContext(SidebarContext);
  return (
    <>
      <OpacityCurtain
        active={sidebarActive}
        toggleSideBarActive={toggleSidebarActive}
      />
      <Blog />
    </>
  );
};

export default BlogPage;
