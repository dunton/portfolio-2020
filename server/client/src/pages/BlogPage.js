import React, { useContext } from 'react';
import Blog from '../components/Blog';
import OpacityCurtain from '../components/OpacityCurtain';
import { SidebarContext } from '../contexts/SidebarContext';

const BlogPage = (props) => {
  const { sidebarActive, toggleSidebarActive } = useContext(SidebarContext);
  return (
    <>
      <OpacityCurtain
        sidebarActive={sidebarActive}
        toggleSideBarActive={toggleSidebarActive}
      />
      <Blog
        sidebarActive={sidebarActive}
        toggleSideBarActive={toggleSidebarActive}
      />
    </>
  );
};

export default BlogPage;
