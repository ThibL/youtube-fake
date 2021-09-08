import React from "react";
import { useStyles } from "./Video.styles";

export const Trending = ({ video, videoKey }) => {
  const classes = useStyles();
  return (
    <div key={videoKey} className={classes.trending}>
      <iframe
        className={classes.iframe}
        src={`https://www.youtube.com/embed/${video.id}`}
        allowFullScreen
      />
    </div>
  );
};
