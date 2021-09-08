import React from 'react';
import {Video} from "../Video/Video";

export const VideosList = ({videos}) => {
  return (
      <div>
        {videos && videos.map(video => (
            <Video video={video} />
        ))}
      </div>
  );
};
