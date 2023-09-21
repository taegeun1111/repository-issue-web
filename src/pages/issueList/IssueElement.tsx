import React from 'react';
import {BsChatSquareDots} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import {Issue} from "../../types/Issue";
import {StyledAd, StyledIssueElement} from "./IssueElement.styled";
import adImg from "../../assets/20210419-wanted.jpg"

interface Props {
  index: number
  issue: Issue
}

const IssueElement = ({index, issue}: Props) => {
  const navigate = useNavigate();

  const detailNavigatorHandler = () => {
    navigate(`/issues/${issue.number}`)
  }

  return (
    <>
      <StyledIssueElement onClick={detailNavigatorHandler}>
        <div className="issue-number">#{issue.number}</div>
        <div className="issue-title">{issue.title}</div>
        <section className="issue-info">
          <div className="issue-author">작성자 : {issue.user.login}</div>
          <div className="issue-date">작성일 : {new Date(issue.created_at).toLocaleDateString('ko-KR')}</div>
          <div className="issue-comments">
            <BsChatSquareDots className="issue-comments-icon"/> {issue.comments}
          </div>
        </section>
      </StyledIssueElement>
      
      {(index + 1) % 5 === 0 &&
        <StyledAd
           href={"https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"}>
            <img src={adImg} alt="AdImg" className='adImg'/>
        </StyledAd>}
    </>
  );
};

export default IssueElement;