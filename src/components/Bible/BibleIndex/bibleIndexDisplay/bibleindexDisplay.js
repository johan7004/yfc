import { React, useState } from "react";
import "./bibleIndexDisplay.css";
import BibleChapters from "../../BibleChapters/bibleChapters";

export default function BibleIndexDisplay(props) {
  const [wholeChapter, setWholeChapter] = useState(null);

  const fullChapter = (e) => {
    let selectedChapter = e.target.innerHTML;
    document.querySelector('.full-chapter__verses').scrollIntoView({behaviour:'smooth'});
    setWholeChapter(props.selectedBook.Chapter[selectedChapter - 1]);
  };
  return (
    <>
      <div className="book-name__container">{props.bookNames}</div>
      <div className="chapters__container">
        {props.selectedBook ? (
          Object.keys(props.selectedBook.Chapter).map((chapters) => (
            <p
              className="chapters__numbers"
              key={chapters}
              onClick={fullChapter}
            >
              {Number(chapters) + 1}
            </p>
          ))
        ) : (
          <p className="chapters__numbers--not-active">Chapters not loaded</p>
        )}
      </div>
      <div></div>
      <BibleChapters
      displayChapter={wholeChapter}
      />

    </>
  );
}
