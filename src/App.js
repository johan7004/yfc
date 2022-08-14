/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BiblePage from "./pages/BiblePage/BiblePage";
import SongsPage from "./pages/SongsPage/SongsPage";
import HomePage from "./pages/homePage";
import BibleQaPage from "./pages/BibleQaPage/BibleQaPage";
import HealthTipsPage from "./pages/HealthTipsPage/HealthTipsPage";
import BibleStudy from "./pages/BibleStudy/BibleStudy";
import NavBar from "./components/Navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  useEffect(() => {
    let interval = setInterval(() => {
      fetch(`https://yfcbackend.herokuapp.com/api/`).then((res) =>
        console.log(`server Pinged`)
      );
    }, 1500000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />}></Route>
        <Route path="Songs/*" element={<SongsPage />}></Route>
        <Route path="bible" element={<BiblePage />}></Route>
        <Route path="bible-study" element={<BibleStudy />}></Route>
        <Route path="bible-q-a" element={<BibleQaPage />}></Route>
        <Route path="health-tips" element={<HealthTipsPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
