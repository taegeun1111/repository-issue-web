import React from 'react';
import {OWNER, REPO} from "../../services/issueInstance";
import {StyledHeader} from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <span className="header-title">
        {OWNER} / {REPO}
      </span>
    </StyledHeader>
  );
};

export default Header;