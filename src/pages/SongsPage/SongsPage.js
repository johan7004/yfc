import React from "react";
import ChristianSongs from "../../components/Songs/ChristianSongs";
import { Link } from "react-router-dom";

export default function SongsPage() {
  return (
    <div>
      <div className="home-link">
        <Link to="/yfc">Home</Link>
      </div>
      <ChristianSongs />
    </div>
  );
}
