import axios from "axios";
const KEY =  'AIzaSyD6TCSgVuBGi-iqo1jgMxEDGUDX_n6ZGuQ'

export default  axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
