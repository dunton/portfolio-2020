import React, { createContext, useState } from 'react';

const SidebarContext = createContext();

const SidebarContextProvider = (props) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebarActive = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <SidebarContext.Provider value={{ sidebarActive, toggleSidebarActive }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarContextProvider };
