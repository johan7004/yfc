/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import BiblePage from "./pages/BiblePage/BiblePage";
import SongsPage from "./pages/SongsPage/SongsPage";
import HomePage from "./pages/homePage";
import BibleQaPage from "./pages/BibleQaPage/BibleQaPage";
import HealthTipsPage from "./pages/HealthTipsPage/HealthTipsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/yfc" element={<HomePage />}></Route>
            <Route path="/yfc/bible" element={<BiblePage />}></Route>
            <Route path="/yfc/Songs" element={<SongsPage />}></Route>
            <Route path="/yfc/health-tips" element={<HealthTipsPage />}></Route>
            <Route path="/yfc/bible-q-a" element={<BibleQaPage />}></Route>
          </Routes>
        </header>
      </div>
    );
  }
}

export default App;
