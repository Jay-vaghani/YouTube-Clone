import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/api.";
import { Box, Grid } from "@mui/material";
import {VideoCard} from "./index";

function PlayListDetail() {
  const { id } = useParams();

  const [playListVideo, setPlayListVideo] = useState([]);

  useEffect(() => {
    fetchFromAPI(`/playlistItems?playlistId=${id}&part=snippet`).then((data) =>
      setPlayListVideo(data.items)
    );
  }, [id]);

  console.log(playListVideo);

  return (
    <Grid
      container
      spacing={2}
      justifyContent={"start"}
      sx={{ color: "white" }}
    >
      {playListVideo.map((data, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <VideoCard videoInfo={data} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PlayListDetail;
