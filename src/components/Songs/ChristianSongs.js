import { React, useState, useEffect } from "react";
import "./ChristianSongs.css";

export default function ChristianSongs() {
  const [listOfCategories, setListOfCategories] = useState([]);
  const [songData, setSongData] = useState([]);
  const [fullSong, setFullSong] = useState("");

  useEffect(() => {
    fetch("https://yfcbackend.herokuapp.com/api/categories")
      .then((res) => res.json())
      .then((data) => setListOfCategories(data.data));
  }, []);

  function displaySongList(e) {
    e.preventDefault();
    const selectedSongCategory = e.target.innerText;
    const categoryName = selectedSongCategory.split(" ").join("%20");
    fetch(
      `https://yfcbackend.herokuapp.com/api/songs?filters[$and][0][categories][Category__Name][$eq]=${categoryName}`
    )
      .then((res) => res.json())
      .then((data) => setSongData(data.data));
  }

  function displayFullSong(e) {
    e.preventDefault();
    const selectedSongTitle = e.target.innerText;

    songData.map((data) => {
      const songTitle = data.attributes.Song__Title;

      const findSong =
        songTitle === selectedSongTitle
          ? setFullSong(data.attributes.Song)
          : setFullSong("");

      return findSong;
    });
  }
  return (
    <>
      <div className="christian-songs__container">
        <h1> ChristianSongs</h1>
        {listOfCategories.map((data, i) => {
          return (
            <button key={i} onClick={(e) => displaySongList(e)}>
              <h4>{data.attributes.Category__Name}</h4>
            </button>
          );
        })}
      </div>
      <div className="song-list__container">
        {songData.map((data, i) => {
          return (
            <p key={i} onClick={(e) => displayFullSong(e)}>
              {data.attributes.Song__Title}
            </p>
          );
        })}
        <p>{fullSong}</p>
      </div>
    </>
  );
}
