import React, {useCallback, useEffect, useState} from "react";
import {getIssue} from "../../services/issueInstance";
import {Issue} from "../../services/Issue";
import IssueElement from "./IssueElement";
import {StyledIssueList} from "./IssueList.styled";
import {useLoading} from "../../hooks/useLoading";
import {BeatLoader} from "react-spinners";

const IssueList = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState(1);
  const {loading, startLoading, finishLoading} = useLoading();
  const rootElement = document.getElementById("root");
  const [infiniteScroll, setInfiniteScroll] = useState(false);

  const fetchIssues = useCallback(async () => {
    try {
      console.log("fetchIssues의 page값 : ", page);
      const res = await getIssue(page);
      if (res.status === 200) {
        setIssues((prevState) => [...prevState, ...res.data]);
      }
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
    }
  }, [page]);

  useEffect(() => {
    if (issues.length === 0) {
      try {
        startLoading();
        fetchIssues();
        finishLoading();
      } catch (error) {
        console.error("Error fetching issues:", error);
        finishLoading();
      }
    } else {
      fetchIssues();
    }
  }, [fetchIssues]);

  const debounce = <T extends (...args: any[]) => void>(
    callback: T,
    limit: number = 300
  ) => {
    let timeout: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback.apply(this, args);
      }, limit);
    };
  };

  const handleRootScroll = debounce(() => {
    if (
      rootElement &&
      rootElement.scrollTop + rootElement.clientHeight >= rootElement.scrollHeight
    ) {
      setTimeout(() => {
        setPage((prevPage) => prevPage + 1);
      }, 500);
    }
  });

  useEffect(() => {
    if (rootElement) {
      setInfiniteScroll(true);
      rootElement.addEventListener("scroll", handleRootScroll);
      return () => {
        rootElement.removeEventListener("scroll", handleRootScroll);
      };
    }
  }, []);

  return (
    <StyledIssueList loading={loading}>
      {loading ? (
        <BeatLoader color="#0059cd" className="loadingBar"/>
      ) : (
        issues.map((issue, index) => (
          <IssueElement
            key={index}
            index={index}
            issue={issue}
          />
        ))
      )}
      <BeatLoader color="#0059cd" className="loadingBar"/>
    </StyledIssueList>
  );
};

export default IssueList;
