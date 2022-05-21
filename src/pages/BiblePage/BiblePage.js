import React from "react";
import BibleDirectory from "../../components/Bible/BibleIndex/bibleIndex";
import { Link } from "react-router-dom";

export default function BiblePage() {
  return (
    <div>
  <div className="home-link">
      <Link  to="/yfc">Home</Link>
      </div>
      <BibleDirectory />
    </div>
  );
}
