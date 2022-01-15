/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bible: [],
      count: 0,
      booksOfBibleOld: [
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
      ],

      booksOfBibleNew: [
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
      ],
      selectedBibleBook: [],
      chapterNumbers: [],
      fullChapter: [],
    };

    this.selectedBook = this.selectedBook.bind(this);
    this.selectedChapter = this.selectedChapter.bind(this);
    this.displayTestament = this.displayTestament.bind(this)
  }

  componentDidMount() {
    fetch(
      "https://youth-for-christ-1-default-rtdb.europe-west1.firebasedatabase.app/Book.json"
    )
      .then((response) => response.json())
      .then((Book) => this.setState({ bible: Book }));
  }


  displayTestament(event){

    let testament = event.target.innerHTML.toLowerCase()
    console.log(testament)

    if(testament==="new testament"){
      console.log(testament)
      document.querySelector('.oldtestamentBook').style.display="none";
      document.querySelector('.newtestamentBook').style.display="block"
      document.querySelector('.newtestamentBook').style.marginLeft="24%"
    } if(testament==="old testament"){
      console.log(testament)
      document.querySelector('.newtestamentBook').style.display="none";
      document.querySelector('.oldtestamentBook').style.display="block"
      document.querySelector('.oldtestamentBook').style.marginLeft="24%"


    }

  };

  selectedBook(event) {
    const book = event.target.innerText.toLowerCase();
    const oldtestamentBook = this.state.booksOfBibleOld;
    const newtestamentBook = this.state.booksOfBibleNew;
    let bookNumber;
    document.querySelector(".fullChapter").style.display = "none";

    console.log(book);
    console.log(this.state.bible);

    if (oldtestamentBook.includes(book) || newtestamentBook.includes(book)) {
      if (oldtestamentBook.includes(book)) {
        bookNumber = oldtestamentBook.indexOf(book);
      }

      if (newtestamentBook.includes(book)) {
        bookNumber = Number(newtestamentBook.indexOf(book)) + 39;
        console.log(bookNumber);
      }

      let numberOfChapter = this.state.bible[bookNumber].Chapter;
      this.setState({ selectedBibleBook: numberOfChapter });
      let totalChapter = Object.keys(numberOfChapter);
      this.setState({ chapterNumbers: totalChapter });

      document.querySelector('.chapters').scrollIntoView({ behavior: 'smooth', block: "end" });

    }
  }

  selectedChapter(event) {
    let chosenChapter = event.target.innerText;
    let wholeChapter = this.state.selectedBibleBook[chosenChapter - 1].Verse;

    this.setState({ fullChapter: "" });
    document.querySelector(".fullChapter").style.display = "flex";

    if (chosenChapter >= 0) {
      console.log(wholeChapter);

      wholeChapter.map((verses) =>
        this.setState((prevState) => {
          return { fullChapter: [...prevState.fullChapter, verses.Verse] };
        })
      );
      document.querySelector('.fullChapter').scrollIntoView({'behavior':"smooth", block:"start"})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="testamentDisplay">
        <a className="bookDisplayBtn" onClick={this.displayTestament}>
        Old Testament
        </a>
        <a className="bookDisplayBtn" onClick={this.displayTestament}>New Testament
        
        </a>
        </div>
        <a >ASV version</a>
        <div className="row ">
            <div className="col-2 oldtestamentBook">
            
              <h1>Old Testament</h1>
              <div className="oldtestament">
                {this.state.booksOfBibleOld.map((books) => (
                  <a
                    key={books}
                    className="bookNames"
                    onClick={this.selectedBook}
                  >
                    {books + " "}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-2 newtestamentBook">
              <h1>New Testament</h1>
              <div className="oldtestament">
                {this.state.booksOfBibleNew.map((books) => (
                  <a
                    key={books}
                    className="bookNames"
                    onClick={this.selectedBook}
                  >
                    {books + " "}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {this.state.chapterNumbers.length ? (
            <h4>Choose Chapter</h4>
          ) : (
            <h4>Select A Book</h4>
          )}
          <div className="chapters">
            {this.state.chapterNumbers.map((numbers) => (
              <a
                key={numbers}
                className="chapterNumber"
                onClick={this.selectedChapter}
              >
                {" "}
                {Number(numbers) + 1}
              </a>
            ))}
          </div>
          <div className="fullChapter">
            {this.state.fullChapter.map((verses) => (
              <p key={verses} className="verses">
                {" "}
                {this.state.fullChapter.indexOf(verses) + 1 + " " + verses}
              </p>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
