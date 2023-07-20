import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/api.";
import { Box, Stack } from "@mui/material";

import { ChanelCard, Video } from "./index";

function ChanelDetail() {
  const [chanelInfo, setChanelInfo] = useState({});
  const [chanelVideos, setChanelVideos] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`/channels?part=snippet&id=${id}`).then((res) =>
      setChanelInfo(res.items[0])
    );

    fetchFromAPI(`/search?channelId=${id}&part=snippet&order=date`).then(
      (res) => setChanelVideos(res.items)
    );
  }, [id]);



  return (
    <Box minHeight={"95vh"}>
      <Box
        minHeight={"250px"}
        sx={{
          background: "rgb(255,0,78)",
          background:
            "linear-gradient(90deg, rgba(255,0,48,1) 17%, rgba(255,0,181,1) 100%)",
        }}
      ></Box>
      <ChanelCard chanelInfo={chanelInfo} mt={"-90px"} />
      <Video videos={chanelVideos} mt={"30px"}/>
    </Box>
  );
}

export default ChanelDetail;
