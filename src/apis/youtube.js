import axios from "axios";
const KEY = "AIzaSyCXZqDEVjrQgNdhSKTTv5JP6cq0XwEmeoI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
