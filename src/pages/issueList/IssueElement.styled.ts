import {styled} from "styled-components";

export const StyledIssueElement = styled.li`
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid rgb(150,150,150);
  position: relative;

  .issue-number {
    font-size: 0.9rem;
    color: rgb(150, 150, 150);
    padding-bottom: 7px;
  }

  .issue-title {
    color: #0059cd;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.2;
    text-decoration: none;
  }
  
  .issue-info{
    display: flex;
    font-size: 0.85rem;
    padding: 8px 0 0;
  }
  
  .issue-author{
    padding-right: 10px;
  }
  
  .issue-comments{
    position: absolute;
    font-size: 0.8rem;
    right: 0;
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .issue-comments-icon{
    padding-right: 3px;
  }
`