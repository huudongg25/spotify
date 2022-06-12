import DefaultLayout from "./components/layout/defaultLayout";
import Login from "./components/layout/loginLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContent from "./components/contentComponents/home Content";
import SearchContent from "./components/contentComponents/searchContent";
import LibraryContent from "./components/contentComponents/libraryContent";
import { Songs } from "./Context";
import DataSongs from "./components/data/songs.json";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  return (
    <BrowserRouter>
      <Songs.Provider value={{ DataSongs, song, setSong }}>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route
            path="/home"
            element={
              <DefaultLayout>
                <HomeContent />
              </DefaultLayout>
            }
          />
          <Route
            path="/search"
            element={
              <DefaultLayout>
                <SearchContent />
              </DefaultLayout>
            }
          />
          <Route
            path="/library"
            element={
              <DefaultLayout>
                <LibraryContent />
              </DefaultLayout>
            }
          />
        </Routes>
      </Songs.Provider>
    </BrowserRouter>
  );
}

export default App;
