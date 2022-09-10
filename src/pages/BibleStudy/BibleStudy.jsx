import React from "react";
import BibleStudyTopics from "./../../components/BibleStudyTopics/BibleStudyTopics";
import FullArticlePage from "./../full-article/full-article.component";
import { Routes, Route } from "react-router-dom";

function BibleStudy() {
  return (
    <Routes>
      <Route index element={<BibleStudyTopics />}></Route>
      <Route path=":bible" element={<FullArticlePage />}></Route>
    </Routes>
  );
}

export default BibleStudy;
