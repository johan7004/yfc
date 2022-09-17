import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SongCards from "../song-cards/song-cards.component.jsx";
import { SONGS_QUERY, CATEGORIES_QUERY } from "../queries/songs-query.js";
import { useQuery } from "@apollo/react-hooks";
import "./ChristianSongs.css";

export default function ChristianSongs() {
  const [listOfCategories, setListOfCategories] = useState([]);
  const [songData, setSongData] = useState([]);
  const song = useQuery(SONGS_QUERY);
  const categories = useQuery(CATEGORIES_QUERY);

  useEffect(() => {
    if (song.data) {
      setSongData(song.data.songs.data);
    }

    if (categories.data) {
      setListOfCategories(categories.data.categories.data);
    }
  }, [song, categories]);
  
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



  return (
    <>
      <Container>
        <Row>
          {listOfCategories
            ? listOfCategories.map((data, i) => {
                const categoriesTitle = data.attributes.Category__Name;
                return (
                  <Col key={i}>
                    <button onClick={(e)=> displaySongList(e)}>
                      <h4>{categoriesTitle}</h4>
                    </button>
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
      <Container className="song-list__container">
        <Row>
          {songData
            ? songData.map((data, i) => {
                const songTitle = data.attributes.Song__Title;
                const songSlug = data.attributes.Slug;
                let songAuthor = data.attributes.author
  
                return (
                  <Col key={i}>
                    <SongCards
                      key={i}
                      title={songTitle}
                      author={songAuthor}
                      url={songSlug}
                    />
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
    </>
  );
}
