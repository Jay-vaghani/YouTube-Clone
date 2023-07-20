import {
  CheckCircleTwoTone,
  ErrorTwoTone,
  HighlightOffTwoTone,
} from "@mui/icons-material";
import { CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ChanelCard({ chanelInfo, mt }) {
  return (
    <Stack
      justifyContent={
        chanelInfo?.snippet?.thumbnails?.high?.url ? `center` : "start"
      }
      alignItems={"center"}
      textAlign={"center"}
      color={"#fff"}
      height={"100%"}
      mt={mt}
    >
      <Link
        to={
          chanelInfo?.snippet?.thumbnails?.high?.url
            ? `/chanel/${chanelInfo?.id?.channelId}`
            : ""
        }
      >
        <CardMedia
          image={
            chanelInfo?.snippet?.thumbnails?.high?.url ||
            "./images/NotFound.jpg"
          }
          sx={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            mb: 2,
            border: chanelInfo?.snippet?.thumbnails?.high?.url
              ? "1px solid #e3e3e3"
              : "",
            mt: chanelInfo?.snippet?.thumbnails?.high?.url ? `0` : "10px",
          }}
        ></CardMedia>
      </Link>
      <Typography variant="h6">
        <Stack alignItems={"center"} direction={"row"}>
          {chanelInfo?.snippet?.thumbnails?.high?.url
            ? chanelInfo?.snippet?.title
            : "Chanel Not Found"}{" "}
          {chanelInfo?.snippet?.thumbnails?.high?.url ? (
            <CheckCircleTwoTone
              fontSize="inherit"
              sx={{ ml: 0.7, color: "#fc1503" }}
            />
          ) : (
            <HighlightOffTwoTone
              fontSize="inherit"
              sx={{ ml: 0.7, color: "#fc1503" }}
            />
          )}
        </Stack>
      </Typography>
      <Typography>
        {chanelInfo?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(chanelInfo?.statistics?.subscriberCount).toLocaleString()}{" "}
            Subscriber
          </Typography>
        )}
      </Typography>
    </Stack>
  );
}

export default ChanelCard;
