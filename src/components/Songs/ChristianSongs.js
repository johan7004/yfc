import { React, useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SongCards from "./../song-cards/song-cards.component.jsx";
import { FullSongContext } from "./../contexts/songs-provider.context";
import "./ChristianSongs.css";

export const getSongsData = (data) => {
  const songListData = () => data;
  return songListData();
};

export default function ChristianSongs() {
  const [listOfCategories, setListOfCategories] = useState([]);
  const [songData, setSongData] = useState([]);
  const { setFullSong } = useContext(FullSongContext);

  useEffect(() => {
    fetch("https://yfcbackend.herokuapp.com/api/categories")
      .then((res) => res.json())
      .then((data) => setListOfCategories(data.data));
    fetch("https://yfcbackend.herokuapp.com/api/songs")
      .then((res) => res.json())
      .then((data) => setSongData(data.data));
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

  useEffect(() => {
    setFullSong(songData);
  }, [songData, setFullSong]);

  return (
    <>
      <Container className="christian-songs__container">
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
      </Container>

      <Container className="song-list__container">
        <Row>
          {songData.map((data, i) => {
            const songTitle = data.attributes.Song__Title;
            return (
              <Col key={i}>
                <SongCards
                  title={songTitle}
                  description={songTitle}
                  url={songTitle}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
