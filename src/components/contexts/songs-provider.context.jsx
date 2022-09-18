import { useState, createContext} from "react";

export const FullSongContext = createContext({
  songs: {},
  setFullSong: () => {},
});

export const FullSongProvider = ({ children }) => {
  const [songs, setFullSong] = useState({});

  

  const values = { songs, setFullSong };
  return (
    <FullSongContext.Provider value={values}>
      {children}
    </FullSongContext.Provider>
  );
};
