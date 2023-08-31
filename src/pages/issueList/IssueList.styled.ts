import {styled} from "styled-components";

interface StyleProps {
  loading : boolean;
}

export const StyledIssueList = styled.ul<StyleProps>`
  padding: 0 20px;

  ${({loading})=> loading && `
  height:65%;
  display: flex;
  align-items: center;
  justify-content: center;
  `}

  .loadingBar{
    
  }
`