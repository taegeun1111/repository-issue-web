import React, {useCallback, useEffect, useState, Suspense} from "react";
import {useParams} from "react-router-dom";
import {getDetail} from "../../apis/issueInstance";
import {StyledIssueDetail} from "./IssueDetail.styled";
import {Issue} from "../../types/Issue";
import {BeatLoader} from "react-spinners";
import IssueDetailElement from "./IssueDetailElement";

const IssueDetail = () => {
  const {issueNumber} = useParams();
  const [IssueDetail, setIssueDetail] = useState<Issue | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetail = useCallback(async () => {
    try {
      if (issueNumber) {
        const res = await getDetail(+issueNumber);
        if (res.status === 200) {
          setIssueDetail(res.data);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  }, [issueNumber]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  if (isLoading) return <BeatLoader color="#0059cd" className="loadingBar"/>;

  return (
    <StyledIssueDetail>
      {IssueDetail && <IssueDetailElement IssueDetail={IssueDetail}/>}
    </StyledIssueDetail>
  );
};

export default IssueDetail;
