import React from 'react';
import {Route, Routes} from "react-router-dom";
import IssueList from "./pages/issueList/IssueList";
import Header from "./pages/header/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={"/"} element={<IssueList/>}/>
        <Route path={"/issues/:issueNumber"} element={<IssueList/>}/>
      </Routes>
    </>
  );
}

export default App;
