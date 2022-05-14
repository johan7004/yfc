import React from "react";
import "./HomePage.css";
import BibleDirectory from "../components/Bible/BibleIndex/bibleIndex";
import ChristianSongs from "../components/Songs/ChristianSongs";

export default function HomePage() {
  return (
    <div className="home-page__container">
    
      <a href="/yfc/bible">Bible</a>
      <a href="/yfc/Songs">songs</a>
      <a href="/yfc/health-tips">Health Tips</a>
      <a href="/yfc/bible-q-a">Bible Q&A</a>
      
    </div>
  );
}
