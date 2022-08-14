import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SongCards from "./../song-cards/song-cards.component.jsx";
import "./ChristianSongs.css";

export default function ChristianSongs() {
  const [listOfCategories, setListOfCategories] = useState([]);
  const [songData, setSongData] = useState([]);
  const [fullSong, setFullSong] = useState([]);
  const [songFullTitle, setSongFullTitle] = useState("");

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

  const displayFullSong = (e) => {
    e.preventDefault();
    const selectedSongTitle = e.target.innerText;

    setSongFullTitle(selectedSongTitle);
  };

  useEffect(() => {
    songData.forEach((data) => {
      return data.attributes.Song__Title === songFullTitle
        ? setFullSong(data.attributes.Song.split("\n"))
        : "";
    });
  }, [songFullTitle, songData]);

  console.log(songData);

  return (
    <>
      <div className="christian-songs__container">
        {!listOfCategories
          ? "Loading....."
          : listOfCategories.map((data, i) => {
              return (
                <button
                  className="song-btn-category"
                  key={i}
                  onClick={displaySongList}
                >
                  <h4>{data.attributes.Category__Name}</h4>
                </button>
              );
            })}
      </div>
      <div className="song-list__container">
        <Container>
          <Row>
            {songData.map((data, i) => {
              const songTitle = data.attributes.Song__Title;
              return (
                <Col key={i}>
                  <SongCards title={songTitle} description={songTitle} url={songTitle} />
                </Col>
              );
            })}
          </Row>
        </Container>
        <table className="full-song">
          <tbody>
            {fullSong.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}