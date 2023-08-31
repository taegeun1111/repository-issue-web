import { styled } from "styled-components";

export const StyledIssueDetail = styled.div`
  padding: 0 20px;

  .detail-wrapper {
    display: flex;
    align-items: end;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(150,150,150);
  }
  .detail-profile {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    /* padding-top: 25px; */
  }
  .detail-title-wrapper {
    position: relative;
  }

  .issue-number {
    font-size: 0.9rem;
    color: rgb(150, 150, 150);
    padding-bottom: 7px;
  }

  .issue-title {
    color: #0059cd;
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.2;
    text-decoration: none;
  }
  
  .issue-info{
    display: flex;
    font-size: 0.8rem;
    padding: 8px 0 0;
  }
  
  .issue-author{
    padding-right: 10px;
  }
  
  .issue-comments{
    position: absolute;
    font-size: 0.8rem;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .issue-comments-icon{
    padding-right: 3px;
  }

  .detail-body{
    padding: 10px 0;
  }
`;
