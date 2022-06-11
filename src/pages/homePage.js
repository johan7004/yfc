import React from "react";
import NavBar from "../components/Navbar/NavBar";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <section className="Welcome-message">
      <NavBar></NavBar>
        <div className="Welcome-message__container">
          <h1 className="Welcome-message__title">Come Let us Know the real God</h1>
        </div>
      </section>
      <section className="Bible-study">
        <div className="Bible-study__container">
          <h1 className="Welcome-message__title">Come Let us Know the real God</h1>
        </div>
      </section>
    </>
  );
}
