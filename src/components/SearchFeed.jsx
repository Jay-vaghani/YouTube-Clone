import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Video } from "./index";

import { fetchFromAPI } from "../utils/api.";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);

  let { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`/search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight={"bold"} mb={2} color={"white"}>
        Search Videos For:{" "}
        <span style={{ color: "#f31503" }}> {searchTerm.toUpperCase()}</span>
      </Typography>
      <Video videos={videos} />
    </Box>
  );
}

export default SearchFeed;
