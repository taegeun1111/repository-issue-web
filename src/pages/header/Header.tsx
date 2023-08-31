import React from 'react';
import {OWNER, REPO} from "../../services/issueInstance";
import {HeaderStyled} from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <span className="header-title">
        {OWNER} / {REPO}
      </span>
    </HeaderStyled>
  );
};

export default Header;