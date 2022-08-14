import { React, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FullSongContext } from "../../components/contexts/songs-provider.context";
import ReactMarkdown from "react-markdown";
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

  return (
    <div>
      {console.log(completeSong)}
      <p>{completeSong}</p>
    </div>
  );
}
