import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsChatSquareDots } from "react-icons/bs";
import { getDetail } from "../../services/issueInstance";
import { StyledIssueDetail } from "./IssueDetail.styled";
import { Issue } from "../../services/Issue";

const IssueDetail = () => {
  const { issueNumber } = useParams(); // 파라미터 이름을 정확히 지정해야 함
  const [IssueDetail, setIssueDetail] = useState<Issue>();

  const fetchDetail = useCallback(async () => {
    try {
      if (issueNumber) {
        const res = await getDetail(+issueNumber);
        if (res.status === 200) {
          console.log(res.data);
          setIssueDetail(res.data);
        }
      }
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  }, [issueNumber]);

  useEffect(() => {
    fetchDetail();
  }, [issueNumber]); // issueNumber가 변경될 때마다 useEffect 호출

  return (
    <StyledIssueDetail>
      {IssueDetail && (
        <>
          <div className="detail-wrapper">
            <img
              className="detail-profile"
              src={IssueDetail.user.avatar_url}
              alt={`${IssueDetail.user.login}'s profile`}
            />
            <section className="detail-title-wrapper">
              <div className="issue-number">#{IssueDetail.number}</div>
              <div className="issue-title">{IssueDetail.title}</div>
              <div className="issue-info">
                <div className="issue-author">작성자:{IssueDetail.user.login}</div>
                <div className="issue-date">
                  작성일:{new Date(IssueDetail.created_at).toLocaleDateString()}
                </div>
                <div className="issue-comments">
                  <BsChatSquareDots className="issue-comments-icon" />{" "}
                  {IssueDetail.comments}
                </div>
              </div>
            </section>
          </div>

          <div className="detail-body">{IssueDetail.body}</div>
        </>
      )}
    </StyledIssueDetail>
  );
};

export default IssueDetail;
