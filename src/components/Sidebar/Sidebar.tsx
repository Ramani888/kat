import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./routes";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { Nav, NavIcon, SidebarNav } from "./Sidebar.style";
  

  

  

  
const SidebarWrap = styled.div`
  width: 100%;
`;
  
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{ textAlign: "center", 
                     marginLeft: "200px", 
                     color: "green" }}
          >
            GeeksforGeeks
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
  
export default Sidebar;