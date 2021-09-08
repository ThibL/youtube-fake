import React, { useEffect, useState } from "react";
import youtube from "./apis/youtube";
import { SearchAppBar } from "./Layout/SimpleAppBar/SimpleAppBar";
import { VideosList } from "./VideosList/VideosList";
import { Trending } from "./Video/Trending";
import { useStyles } from "./App.styles";
import { GoogleLogin } from "./Login/GoogleLogin";

export const App = () => {
  const [videos, setVideos] = useState([]);
  const [trending, setTrending] = useState([]);
  const [term, setTerm] = useState("");

  const classes = useStyles();

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (query) => {
    if (term !== "") {
      const response = await youtube.get("/search", {
        params: {
          q: query,
        },
      });
      setVideos(response.data.items);
    }
  };

  useEffect(() => {
    youtube
      .get("/videos", {
        params: {
          chart: "mostPopular",
          part: "contentDetails",
        },
      })
      .then((response) => {
        setTrending(response.data.items);
      });
  }, []);

  return (
    <>
      <div>
        <SearchAppBar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          term={term}
        />
      </div>
      <GoogleLogin />
      <div>
        <VideosList videos={videos} videoKey={Math.random()} />
      </div>
      <div className={classes.trendingContainer}>
        {trending &&
          videos.length === 0 &&
          trending.map((trend) => (
            <Trending video={trend} videoKey={Math.random()} />
          ))}
      </div>
    </>
  );
};
