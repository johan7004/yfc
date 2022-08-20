import { React, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FullSongContext } from "../../components/contexts/songs-provider.context";
import ReactMarkdown from "react-markdown";
import { Container, Row } from "react-bootstrap";
import './full-song.css'
export default function FullSong() {
  const { song } = useParams();
  const [songList, setSongList] = useState([]);
  const { songs } = useContext(FullSongContext);
  const [completeSong, setCompleteSong] = useState("");

  useEffect(() => {
    setSongList(songs);
  }, [songList, songs]);
  useEffect(() => {
    Object.keys(songList).forEach((key) => {
      const songTitle = songList[key].attributes.Song__Title;
      const fullSongLyric = songList[key].attributes.Song;

      return songTitle === song ? setCompleteSong(fullSongLyric) : "nothing";
    });
  }, [songList, song]);

  useEffect(() => {
    const getSongFromLocal = localStorage.getItem("Full Song");
    if (!getSongFromLocal.includes(completeSong)) {
      localStorage.setItem("Full Song", completeSong);
    } else {
      console.log(`song already set`);
    }
  }, [completeSong]);

  useEffect(() => {
    const getSongFromLocal = localStorage.getItem("Full Song");
    if (getSongFromLocal) {
      setCompleteSong(getSongFromLocal);
    }
  }, []);

  return (
    <Container className="full-song__container">
      <Row className="full-song__container-body">
        <ReactMarkdown>{completeSong}</ReactMarkdown>
      </Row>
    </Container>
  );
}
