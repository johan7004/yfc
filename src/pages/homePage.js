import React from "react";
import "./HomePage.css";
import BibleDirectory from "../components/Bible/BibleIndex/bibleIndex";
import ChristianSongs from "../components/Songs/ChristianSongs";

export default function HomePage() {
  return (
    <div className="home-page__container">
    
      <a href="/bible">Bible</a>
      <a href="/Songs">songs</a>
      <a href="/health-tips">Health Tips</a>
      <a href="/bible-q-a">Bible Q&A</a>
      
    </div>
  );
}
