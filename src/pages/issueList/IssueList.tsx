import React, {useCallback, useEffect, useState} from 'react';
import {getIssue} from "../../services/issueInstance";
import {Issue} from "../../services/Issue";
import IssueElement from "./IssueElement";
import {StyledIssueList} from "./IssueList.styled";


const IssueList = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [page, setPage] = useState(1);

  const fetchIssues = useCallback(async () => {
    try {
      const res = await getIssue(page);
      if (res.status === 200) {
        setIssues(prevState => [...prevState, ...res.data]);
      }
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  }, [page]);


  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledIssueList>
      {issues.map((issue, index) => (
        <IssueElement index={index} issue={issue}/>
      ))}
    </StyledIssueList>
  );
};

export default IssueList;