import React, {useCallback, useEffect, useState} from 'react';
import {getIssue} from "../../services/issueInstance";
import {Issue} from "../../services/Issue";
import {BsChatSquareDots} from "react-icons/bs"


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


  useEffect(()=>{
    fetchIssues()
  },[fetchIssues])

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
    <div>
      <div className="issue-list">
        {issues.map((issue, index) => (
          <div key={index} className="issue">
            <div className="issue-number">{issue.number}</div>
            <div className="issue-title"><a href={`/issues/${issue.number}`}>{issue.title}</a></div>
            <div className="issue-author">
              작성자: {issue.user.login}
              {/*<img src={issue.user.avatar_url} alt={`${issue.user.login}'s avatar`} width="50" height="50" />*/}
            </div>
            <div className="issue-date">작성일: {new Date(issue.created_at).toLocaleDateString()}</div>
            <div className="issue-comments"><BsChatSquareDots /> {issue.comments}</div>
            {(index + 1) % 5 === 0 && <a className="ad" href={"https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"}>link to</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueList;