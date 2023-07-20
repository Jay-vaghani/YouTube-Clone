import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/api.";
import { VideoCard } from "./index";
import {
  CheckCircleTwoTone,
  RemoveRedEyeTwoTone,
  ThumbUpTwoTone,
} from "@mui/icons-material";

function VideoDetail() {
  const { id } = useParams();

  const [VideoDetails, setVideoDetails] = useState([]);

  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    fetchFromAPI(
      `/videos?part=contentDetails,snippet,statistics&id=${id}`
    ).then((data) => setVideoDetails(data.items[0]));

    fetchFromAPI(
      `/search?relatedToVideoId=${id}&part=id,snippet&type=video&maxResults=50`
    ).then((data) => setSuggested(data.items));
  }, [id]);

 

  if (!VideoDetails?.snippet) return "Loading...";

  const {
    snippet: { channelId, channelTitle, title },
    statistics: { viewCount, likeCount },
  } = VideoDetails;

  return (
    <Grid container spacing={3} minHeight={"95vh"} px={2}>
      <Grid
        item
        xs={12}
        md={8}
        sx={{ position: "sticky", top: 0, left: 0, zIndex: 0 }}
        height={{ xs: "370px", sm: 550, md: "470px", lg: "540px", xl: "800px" }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width={"100%"}
          controls
          // style={{minHeight: "50%"}}
          playing={true}
          height={"70%"}
        />
        <Box bgcolor={"#000"} py={5}>
          <Typography variant="h5" color={"#fff"}>
            {title}
          </Typography>
          <Stack direction={"row"} mt={2} justifyContent={"space-between"}>
            <Link to={channelId ? `/chanel/${channelId}` : "/pagenotfound"}>
              <Stack alignItems={"center"} direction={"row"}>
                <Typography
                  variant="subtitle1"
                  color={"GrayText"}
                  fontWeight={"bold"}
                >
                  {channelTitle}{" "}
                </Typography>
                <CheckCircleTwoTone
                  fontSize="inherit"
                  sx={{ ml: 0.7, color: "#fc1503" }}
                />
              </Stack>
            </Link>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Button
                color="error"
                startIcon={<RemoveRedEyeTwoTone color="error" />}
              >
                {viewCount}
              </Button>
              <Button
                color="error"
                startIcon={<ThumbUpTwoTone color="error" />}
              >
                {likeCount}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        {suggested
          ? suggested.map((videoInfo) => {
              return <VideoCard videoInfo={videoInfo} height={true} />;
            })
          : ""}
      </Grid>
    </Grid>
  );
}

export default VideoDetail;
