import { useState, createContext, useEffect} from "react";

export const FullSongContext = createContext({
  songs: {},
  setFullSong: () => {},
});

export const FullSongProvider = ({ children }) => {
  const [songs, setFullSong] = useState({});

  useEffect(() =>{
    console.log(songs)
  },[songs])

  const values = { songs, setFullSong };
  return (
    <FullSongContext.Provider value={values}>
      {children}
    </FullSongContext.Provider>
  );
};
