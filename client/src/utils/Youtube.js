import axios from "axios";

const BASEURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
const APIKEY = "&type=video&key=AIzaSyCkkGsRj6GfHmkD57leUc92quClg4eqGsE";

export default {
  // Gets videos related to search
  getVideos: function(userSearch) {
    return axios.get(BASEURL + userSearch + APIKEY);
  }
};
