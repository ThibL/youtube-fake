import React from "react";
import { Video } from "../Video/Video";

export const VideosList = ({ videos, videoKey }) => {
  return (
    <div>
      {videos && videos.map((video) => <Video video={video} key={videoKey} />)}
    </div>
  );
};
