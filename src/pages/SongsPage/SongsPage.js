import React from "react";
import { Routes, Route } from "react-router-dom";
import ChristianSongs from "../../components/Songs/ChristianSongs";
import FullSong from './../full-song/full-song.component.jsx'

export default function SongsPage() {
  return (
    <div>
      <Routes>
        <Route index element={<ChristianSongs />}></Route>
        <Route path=":song" element={<FullSong />}></Route>
      </Routes>
    </div>
  );
}
