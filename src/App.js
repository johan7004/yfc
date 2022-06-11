/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import BiblePage from "./pages/BiblePage/BiblePage";
import SongsPage from "./pages/SongsPage/SongsPage";
import HomePage from "./pages/homePage";
import BibleQaPage from "./pages/BibleQaPage/BibleQaPage";
import HealthTipsPage from "./pages/HealthTipsPage/HealthTipsPage";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      
        <Routes>
          <Route path="/yfc" element={<HomePage />}></Route>
          <Route path="/yfc/bible/" element={<BiblePage />}></Route>
          <Route path="/yfc/Songs/" element={<SongsPage />}></Route>
          <Route path="/yfc/health-tips/" element={<HealthTipsPage />}></Route>
          <Route path="/yfc/bible-q-a/" element={<BibleQaPage />}></Route>
        </Routes>
  
    );
  }
}

export default App;
