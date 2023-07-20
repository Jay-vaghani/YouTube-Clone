import { CheckCircleTwoTone, PlaylistPlayRounded } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function PlayListCard({
  height,
  playListInfo: {
    id: { playlistId },
    snippet: {
      title,
      channelTitle,
      thumbnails: {
        high: { url },
      },
    },
  },
}) {
  return (
    <Card variant="elevation" elevation={0} sx={{ bgcolor: "#000" }}>
      <Link to={`/playList/${playlistId}`}>
        <CardMedia
          image={url}
          sx={{
            width: "100%",
            height: height
              ? { xs: 270, sm: 430, md: 180, lg: 240, xl: 260 }
              : { xs: 270, sm: 230, md: 180 },
            position: "relative",
          }}
        >
          <Stack
            width={"100%"}
            height={"25px"}
            py={0.3}
            px={1}
            sx={{
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 2px )",
              position: "absolute",
              bottom: "0",
            }}
            justifyContent={"center"}
            alignItems={"start"}
          >
            <PlaylistPlayRounded sx={{ color: "#fff", fontSize: 25 }} />
          </Stack>
        </CardMedia>
        <CardContent>
          <Typography variant="subtitle1" color={"#fff"} fontWeight={"bold"}>
            {title?.split("").length > 59 ? `${title?.slice(0, 60)}...` : title}
          </Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <Typography
              variant="subtitle2"
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
        </CardContent>
      </Link>
    </Card>
  );
}

export default PlayListCard;
