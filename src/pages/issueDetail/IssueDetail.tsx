import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../../services/issueInstance";

const IssueDetail = () => {
  const { issueNumber } = useParams(); // 파라미터 이름을 정확히 지정해야 함

  const fetchDetail = useCallback(async () => {
    try {
      if (issueNumber) {
        const res = await getDetail(+issueNumber);
        if (res.status === 200) {
          console.log(res.data);
        }
      }
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  }, [issueNumber]);

  useEffect(() => {
    fetchDetail();
  }, [issueNumber]); // issueNumber가 변경될 때마다 useEffect 호출

  return <div>{/* 이슈 상세 정보 표시 */}</div>;
};

export default IssueDetail;
