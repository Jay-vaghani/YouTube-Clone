import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { CheckCircleTwoTone } from "@mui/icons-material";

function VideoCard({
  videoInfo: {
    id: { videoId },
    snippet,
  },
  videoInfo,
  height,
}) {
  return (
    <Card variant="elevation" elevation={0} sx={{ bgcolor: "#000" }}>
      <Link
        to={
          videoId
            ? `/video/${videoId}`
            : `/video/${snippet?.resourceId?.videoId}`
        }
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{
            width: "100%",
            height: height
              ? { xs: 270, sm: 430, md: 180, lg: 240, xl: 260 }
              : { xs: 270, sm: 230, md: 180 },
          }}
        ></CardMedia>
        <CardContent sx={{ bgcolor: "#000", height: 106, px: 0 }}>
          <Link to={videoId ? `/video/${videoId}` : "pagenotfound"}>
            <Typography variant="subtitle1" color={"#fff"} fontWeight={"bold"}>
              {snippet?.title?.split("").length > 59
                ? `${snippet?.title?.slice(0, 60)}...`
                : snippet?.title}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/chanel/${snippet?.channelId}`
                : "/pagenotfound"
            }
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Typography
                variant="subtitle2"
                color={"GrayText"}
                fontWeight={"bold"}
              >
                {snippet?.channelTitle}{" "}
              </Typography>
              <CheckCircleTwoTone
                fontSize="inherit"
                sx={{ ml: 0.7, color: "#fc1503" }}
              />
            </Stack>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
}

export default VideoCard;
