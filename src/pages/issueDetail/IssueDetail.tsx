import React, { useCallback, useEffect, useState, Suspense } from "react";
import { Await, useNavigate, useParams } from "react-router-dom";
import { BsChatSquareDots } from "react-icons/bs";
import { getDetail } from "../../services/issueInstance";
import { StyledIssueDetail } from "./IssueDetail.styled";
import { Issue } from "../../services/Issue";
import { useLoading } from "../../hooks/useLoading";
import { BeatLoader } from "react-spinners";
import { HiOutlineArrowLeft } from "react-icons/hi";
import IssueDetailElement from "./IssueDetailElement";

const IssueDetail = () => {
  const { issueNumber } = useParams();
  const [IssueDetail, setIssueDetail] = useState<Issue | undefined>(undefined);
  const { loading, startLoading, finishLoading } = useLoading();

  const fetchDetail = useCallback(async () => {
    try {
      if (issueNumber) {
        const res = await getDetail(+issueNumber);
        if (res.status === 200) {
          startLoading();
          setIssueDetail(res.data);
          finishLoading();
        }
      }
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  }, [issueNumber]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  return (
    <StyledIssueDetail loading={loading}>
      {loading ? (
        <BeatLoader color="#0059cd" className="loadingBar" />
      ) : (
        IssueDetail && <IssueDetailElement IssueDetail={IssueDetail} />
      )}
    </StyledIssueDetail>
  );
};

export default IssueDetail;
