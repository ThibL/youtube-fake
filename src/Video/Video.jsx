import React from "react";
import { useStyles } from "./Video.styles";

export const Video = ({ video, key }) => {
  const classes = useStyles();
  return (
    <div key={video.id} className={classes.container}>
      <iframe
        key={key}
        className={classes.iframe}
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        allowFullScreen
      ></iframe>
      <p key={video.id}>{video.snippet?.description}</p>
    </div>
  );
};
