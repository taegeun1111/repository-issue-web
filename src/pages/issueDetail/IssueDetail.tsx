import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsChatSquareDots } from "react-icons/bs";
import { getDetail } from "../../services/issueInstance";
import { StyledIssueDetail } from "./IssueDetail.styled";
import { Issue } from "../../services/Issue";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useLoading } from "../../hooks/useLoading";
import { BeatLoader } from "react-spinners";

const IssueDetail = () => {
  const { issueNumber } = useParams(); // 파라미터 이름을 정확히 지정해야 함
  const [IssueDetail, setIssueDetail] = useState<Issue>();
  const { loading, startLoading, finishLoading } = useLoading();

  const fetchDetail = useCallback(async () => {
    try {
      if (issueNumber) {
        startLoading();
        const res = await getDetail(+issueNumber);
        if (res.status === 200) {
          console.log(res.data);
          setIssueDetail(res.data);
        }
      }
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      finishLoading();
    }
  }, [issueNumber]);

  useEffect(() => {
    fetchDetail();
  }, [issueNumber]);

  return (
    <StyledIssueDetail loading={loading}>
      {loading ? (
        <BeatLoader color="#0059cd" className="loadingBar" />
      ) : (
        IssueDetail && (
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
                  <div className="issue-author">
                    작성자 : {IssueDetail.user.login}
                  </div>
                  <div className="issue-date">
                    작성일 :{" "}
                    {new Date(IssueDetail.created_at).toLocaleDateString(
                      "ko-KR"
                    )}
                  </div>
                  <div className="issue-comments">
                    <BsChatSquareDots className="issue-comments-icon" />{" "}
                    {IssueDetail.comments}
                  </div>
                </div>
              </section>
            </div>

            {IssueDetail && (
              <div className="detail-body">
                <MarkdownPreview source={IssueDetail.body} />
              </div>
            )}
          </>
        )
      )}
    </StyledIssueDetail>
  );
};

export default IssueDetail;
