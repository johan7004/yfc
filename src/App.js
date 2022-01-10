/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { useState } from 'react';


class App extends Component{
  constructor(){
    super();
    this.state ={
      bible:[],
      count:0,
      booksOfBibleOld:['genisis','exodus','leviticus','numbers','dueteronomy','joshua','judges','ruth','1 samuel','2 samuel', '1 kings', '2 kings', '1 chronicles', '2 chronicles', 'ezra','nehemiah','esther','job','psalms','proverbs','ecclesiastes','song of solomon','isiah','jeremiah','lamentations','ezekiel','daniel','hosea','joel','amos','obadiah','jonah','micah','nahum','habakkuk','zephaniah','haggai','zechariah','malachi'],
      selectedBibleBook:[],
      chapterNumbers:[],
      fullChapter:[],
    };

    this.selectedBook= this.selectedBook.bind(this)
    this.selectedChapter = this.selectedChapter.bind(this)

    

  }

  componentDidMount(){
    fetch("https://youth-for-christ-1-default-rtdb.europe-west1.firebasedatabase.app/Book.json")
    .then(response => response.json())
    .then(Book => this.setState({ bible:Book }))
    
    
    
    
  }

  selectedBook(event){
    const book = event.target.innerText.toLowerCase()
    const oldtestamentBook = this.state.booksOfBibleOld
    
    console.log(book)

    if(oldtestamentBook.includes(book)){

      let bookNumber=oldtestamentBook.indexOf(book);
      let numberOfChapter=this.state.bible[bookNumber].Chapter;
      this.setState({selectedBibleBook:numberOfChapter});
      let totalChapter = Object.keys(numberOfChapter);
      this.setState({chapterNumbers:totalChapter});
       

    };

    
    

  }

  selectedChapter(event){
    let chosenChapter= event.target.innerText
    let wholeChapter = this.state.selectedBibleBook[chosenChapter - 1].Verse
    
    this.setState({fullChapter:""})

    if(chosenChapter >= 0){
      console.log(wholeChapter)
      
      wholeChapter.map(verses =>(
        this.setState(prevState => {
          return{fullChapter:[ ...prevState.fullChapter,verses.Verse]}
        })
      ))
    }
    

    
  }


  
  render(){
    return(
      <div className="App">
      <header className="App-header">
      <h1>Old Testament</h1>
        <div className="oldtestament">
        
        {this.state.booksOfBibleOld.map(books =>(
          <a key={books} className="bookNames" onClick={  this.selectedBook}>{books + ' '}</a>
          
        ))}
        
        </div>
        {this.state.chapterNumbers.length?<h4>Choose Chapter</h4>:<h4>Select A Book</h4>}
        <div className='chapters'>
        
        {this.state.chapterNumbers.map(numbers=>(
          <a key={numbers} className='chapterNumber' onClick={this.selectedChapter}>  {(Number(numbers) + 1)}</a>
        ))}
        </div>
        <div className='fullChapter'>
        {this.state.fullChapter.map(verses=>(
           
            <p key={verses} className='verses'> {this.state.fullChapter.indexOf(verses )+1 +" " + verses}</p>
          
          
        ))}
        </div>
        
        
        
      </header>
    </div>
    )
  }
}

export default App;
