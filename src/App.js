/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { Component } from "react";
import BibleDirectory from "./components/Bible/BibleIndex/bibleIndex";

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Holy Bible</h1>
        <BibleDirectory/>
        </header>
      </div>
    );
  }
}

export default App;
