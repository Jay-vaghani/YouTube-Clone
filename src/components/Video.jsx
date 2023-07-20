import { Box, Grid } from "@mui/material";
import React from "react";
import { VideoCard, ChanelCard, PlayListCard } from "./index";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl } from "../utils/constants";

function Video({ videos, mt }) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"start"}
      sx={{ color: "white" }}
      mt={mt}
    >
      {videos.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            {item.id.videoId && <VideoCard videoInfo={item} />}
            {item.id.channelId && <ChanelCard chanelInfo={item} />}
            {item.id.playlistId && <PlayListCard playListInfo={item} />}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Video;
