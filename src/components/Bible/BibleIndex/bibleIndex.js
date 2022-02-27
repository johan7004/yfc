import { React, useEffect, useState } from "react";
import "./bibleIndex.css";

import BibleIndexDisplay from "./bibleIndexDisplay/bibleindexDisplay";
export default function BibleDirectory() {
  const [fullBible, setFullBible] = useState(null);
  const [bibleIndex, setbibleIndex] = useState(["Select Testament"]);
  const [chosenBook, setChosenBook] = useState("");
  const [fullbook, setFulBook] = useState(null);
  const booksOfNewTestament = [
    "matthew",
    "mark",
    "luke",
    "john",
    "acts",
    "romans",
    "1 corinthians",
    "2 corinthians",
    "galations",
    "ephesians",
    "philippians",
    "colossians",
    "1 thessalonians",
    "2 thessalonians",
    "1 timothy",
    "2 timothy",
    "titus",
    "philemon",
    "hebrews",
    "james",
    "1 peter",
    "2 peter",
    "1 john",
    "2 john",
    "3 john",
    "jude",
    "revelation",
  ];

  const bookOfOldTestament = [
    "genisis",
    "exodus",
    "leviticus",
    "numbers",
    "dueteronomy",
    "joshua",
    "judges",
    "ruth",
    "1 samuel",
    "2 samuel",
    "1 kings",
    "2 kings",
    "1 chronicles",
    "2 chronicles",
    "ezra",
    "nehemiah",
    "esther",
    "job",
    "psalms",
    "proverbs",
    "ecclesiastes",
    "song of solomon",
    "isiah",
    "jeremiah",
    "lamentations",
    "ezekiel",
    "daniel",
    "hosea",
    "joel",
    "amos",
    "obadiah",
    "jonah",
    "micah",
    "nahum",
    "habakkuk",
    "zephaniah",
    "haggai",
    "zechariah",
    "malachi",
  ];

  useEffect(() => {
    fetch(
      "https://yfc-eng-bible-49adc-default-rtdb.europe-west1.firebasedatabase.app/Book.json"
    )
      .then((response) => response.json())
      .then((Book) => setFullBible(Book));
  }, []);

  const selectTestament = (e) => {
    let selectedTestament = e.target.innerHTML;
    switch (selectedTestament) {
      case "Old Testament":
        return setbibleIndex(bookOfOldTestament);
      case "New Testament":
        return setbibleIndex(booksOfNewTestament);
      default:
        return "Select Testament";
    }
  };

  const selectedBook = (e) => {
    let selectedBookTitle = e.target.innerHTML;
    document.querySelector('.chapters__container').scrollIntoView({behavior:'smooth'})
    setChosenBook(selectedBookTitle);
    return selectedBookTitle;
  };

  useEffect(() => {
    if (bibleIndex.length > 1) {
      if (bibleIndex.length >= 39) {
        if (bibleIndex.find((chosenBook) => chosenBook)) {
          let bookIndex = bibleIndex.indexOf(chosenBook);
          setFulBook(fullBible[bookIndex]);
        }
      } else {
        let bookIndex = bibleIndex.indexOf(chosenBook) + 39;
        setFulBook(fullBible[bookIndex]);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenBook]);

  return (
    <>
      <section className="testament">
        <div className="testament__title">
          <button className="testament__title-button" onClick={selectTestament}>
            Old Testament
          </button>

          <button className="testament__title-button" onClick={selectTestament}>
            New Testament
          </button>
        </div>
      </section>
      <div>
        <BibleIndexDisplay
          bookNames={bibleIndex.map((books) => (
            <p key={books} className="book-name__title" onClick={selectedBook}>
              {books}
            </p>
          ))}
          selectedBook={fullbook}
        ></BibleIndexDisplay>
      </div>
    </>
  );
}