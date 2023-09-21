import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Issue } from "../../types/Issue";
import { useNavigate } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { BsChatSquareDots } from "react-icons/bs";

interface Props {
  IssueDetail: Issue;
}

const IssueDetailElement = ({ IssueDetail }: Props) => {

  const navigation = useNavigate();
  const goBackHandler = () => {
    navigation(-1);
  };

  return (
    <div className="detail-wrapper">
      <HiOutlineArrowLeft onClick={goBackHandler} className="goBack-icon" />
      <img
        className="detail-profile"
        src={IssueDetail.user.avatar_url}
        alt={`${IssueDetail.user.login}'s profile`}
      />
      <section className="detail-title-wrapper">
        <div className="issue-number">#{IssueDetail.number}</div>
        <div className="issue-title">{IssueDetail.title}</div>
        <div className="issue-info">
          <div className="issue-author">작성자: {IssueDetail.user.login}</div>
          <div className="issue-date">
            작성일:{" "}
            {new Date(IssueDetail.created_at).toLocaleDateString("ko-KR")}
          </div>
          <div className="issue-comments">
            <BsChatSquareDots className="issue-comments-icon" />{" "}
            {IssueDetail.comments}
          </div>
        </div>
      </section>

      <div className="detail-body">
        <MarkdownPreview source={IssueDetail.body} />
      </div>
    </div>
  );
};

export default IssueDetailElement;
