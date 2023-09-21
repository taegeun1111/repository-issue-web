import React from 'react';
import {Route, Routes} from "react-router-dom";
import IssueList from "./pages/issueList/IssueList";
import Header from "./pages/header/Header";
import {getIssue} from "./apis/issueInstance";
import IssueDetail from './pages/issueDetail/IssueDetail';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={"/"} element={<IssueList/>}/>
        <Route path={"/issues/:issueNumber"} element={<IssueDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
