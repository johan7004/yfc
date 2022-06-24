import React from "react";
import NavBar from "../components/Navbar/NavBar";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <section className="Welcome-message">
        <NavBar></NavBar>
        <div className="Welcome-message__container">
          <h1 className="Welcome-message__title">
            Come Let us Know the real God
          </h1>
        </div>
      </section>
      <section className="Bible-study">
        <div className="Bible-study__container">
          <div className="Bible-study__item">
            <h4 className="Bible-study__text--answer">Answer here Answer here Answer here Answer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer here</h4>
            <h1 className="Bible-study__text--question">Is There A God, Really??</h1>
          </div>
          <div className="Bible-study__item">
            <h1 className="Bible-study__text--question">
              Why Do I need To Know about him?
            </h1>
            <h4 className="Bible-study__text--answer">Answer here Answer here Answer here Answer here Answer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer here</h4>
          </div>
          <div className="Bible-study__item">
            <h4 className="Bible-study__text--answer">Answer here Answer here Answer here Answer here Answer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer hereAnswer here</h4>
            <h1 className="Bible-study__text--question">Why Should I Trust Bible not</h1>
          </div>
        </div>
      </section>
    </>
  );
}
