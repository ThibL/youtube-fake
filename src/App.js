import React, {useState} from "react";
import youtube from "./apis/youtube";
import {AirlineSeatFlat} from "@material-ui/icons";
import {SearchBar} from "./SearchBar/SearchBar";
import {SearchAppBar} from "./Layout/SimpleAppBar/SimpleAppBar";
import {Video} from "./Video/Video";
import {VideosList} from "./VideosList/VideosList";

export const App = () => {
  const [videos, setVideos] = useState([])
  const [term, setTerm] = useState('')

  const handleChange = e => {
    setTerm(e.target.value)
  }

  const handleSubmit = async (query) => {
    const response = await youtube.get('/search', {
      params: {
        q: query
      }
    })
    console.log(response)
    setVideos(response.data.items)
    console.log(videos)
  }



  return (
      <>
        <div>
          <SearchAppBar handleSubmit={handleSubmit} handleChange={handleChange} term={term}/>
        </div>
        <div>
        <VideosList videos={videos} />
        </div>
      </>
  );
}

