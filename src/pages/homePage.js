import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page__container">
      <Link to="/yfc/bible">
        Bible
      </Link>
      <Link to="/yfc/Songs">
        Songs
      </Link>
      <Link to="/yfc/health-tips">
        Health Tips
      </Link>
      <Link to="/yfc/bible-q-a">
        Bible Q&A
      </Link>
    </div>
  );
}
