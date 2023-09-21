import React from 'react';
import {StyledHeader} from "./Header.styled";
import {OWNER, REPO} from "../../constants/constants";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <StyledHeader>
      <span className="header-title">
        {OWNER} / {REPO}
      </span>
      </StyledHeader>
      <Outlet/>
    </>
  );
};

export default Layout;