import React from 'react';
import {Route, Routes} from "react-router-dom";
import IssueList from "./pages/issueList/IssueList";
import IssueDetail from './pages/issueDetail/IssueDetail';
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path={"/"} element={<IssueList/>}/>
          <Route path={"/issues/:issueNumber"} element={<IssueDetail/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
