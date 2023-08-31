import React, { useCallback, useEffect, useState } from "react";
import { getIssue } from "../../services/issueInstance";
import { Issue } from "../../services/Issue";
import IssueElement from "./IssueElement";
import { StyledIssueList } from "./IssueList.styled";

const IssueList = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState(1);
  const rootElement = document.getElementById("root");

  const fetchIssues = useCallback(async () => {
    try {
      console.log("fetchIssues의 page값 : ",page);
      
      const res = await getIssue(page);
      if (res.status === 200) {
        setIssues((prevState) => [...prevState, ...res.data]);
      }
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);


  const handleRootScroll = () => {
    if (rootElement) {
      if (
        rootElement.scrollTop + rootElement.clientHeight ===
        rootElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    if (rootElement) {
      rootElement.addEventListener("scroll", handleRootScroll);
      return () => {
        rootElement.removeEventListener("scroll", handleRootScroll);
      };
    }
  }, []);

  return (
    <StyledIssueList>
      {issues.map((issue, index) => (
        <IssueElement key={index} index={index} issue={issue} />
      ))}
    </StyledIssueList>
  );
};

export default IssueList;
