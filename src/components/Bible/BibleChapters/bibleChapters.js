import { React } from "react";
import "./bibleChapters.css";

export default function Biblechapters(props) {
  return (
    <>
      <div className="full-chapter__container">
        {props.displayChapter ? (
          props.displayChapter.Verse.map((completeChapter, i) => {
            return (
              
              <p className="full-chapter__verses" key={i}>
                {i+1} {completeChapter.Verse}
              </p>
              
              
            );
          })
        ) : (
          <p className="full-chapter__verses--not-active">
            Chapters Loading....
          </p>
        )}
      </div>
    </>
  );
}
