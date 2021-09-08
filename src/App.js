import {SimpleAppBar} from './Layout/SimpleAppBar/SimpleAppBar'
import axios from 'axios'
import {useEffect, useState} from "react";
import youtube from "./apis/youtube";
import {SearchBar} from "./SearchBar/SearchBar";

export const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleSubmit = async(query) => {
    const response = await youtube.get('/search', {
      params: {
        q: query
      }
    })
    setVideos(response.data.items)
  }

  const handleSelectedVideo = video => {
    setSelectedVideo(video)
  }

  return (
      <div>
    <SearchBar handleFormSubmit={handleSubmit} />
        <div>
          <div>
            <div>
              {selectedVideo}
            </div>
          </div>
        </div>
      </div>
  );
}

