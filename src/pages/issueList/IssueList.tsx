import React, {useCallback, useEffect, useRef, useState} from "react";
import {getIssue} from "../../apis/issueInstance";
import {Issue} from "../../types/Issue";
import IssueElement from "./IssueElement";
import {StyledIssueList} from "./IssueList.styled";
import {BeatLoader} from "react-spinners";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const IssueList = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const observerRef = useRef<any>(null);

  const fetchIssues = useCallback(async (page: number) => {
    try {
      console.log("fetchIssues의 page값 : ", page);
      const res = await getIssue(page);
      if (res.status === 200) {
        setIssues((prevState) => [...prevState, ...res.data]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchIssues(page);
  }, [fetchIssues]);

  useIntersectionObserver(
    observerRef,
    () => {
      setPage(page + 1);
    },
    issues,
  );

  if (isLoading) return <BeatLoader color="#0059cd" className="loadingBar"/>;

  return (
    <StyledIssueList>
      {issues.map((issue, index) => (
        <IssueElement
          key={index}
          index={index}
          issue={issue}
        />
      ))}

      <div ref={observerRef}>
        <BeatLoader color="#0059cd" className="loadingBar"/>
      </div>
    </StyledIssueList>
  );
};

export default IssueList;
