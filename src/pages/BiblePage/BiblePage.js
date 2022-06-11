import React from "react";
import BibleDirectory from "../../components/Bible/BibleIndex/bibleIndex";
import NavBar from "../../components/Navbar/NavBar";

export default function BiblePage() {
  return (
    <div>
      <NavBar />
      <BibleDirectory />
    </div>
  );
}
