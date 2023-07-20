import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  NavBar,
  Feed,
  VideoDetail,
  ChanelDetail,
  SearchFeed,
  PlayListDetail,
} from "./components";
import Page404 from "./components/Page404";

function App() {
  return (
    <Box sx={{ bgcolor: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/chanel/:id" element={<ChanelDetail />} />
        <Route path="/playList/:id" element={<PlayListDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Box>
  );
}

export default App;
