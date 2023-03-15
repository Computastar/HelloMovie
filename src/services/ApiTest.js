import axios from 'axios';

const API_KEY = '146efc923dmshd7fd146022b4b75p1a3965jsn3005c3ee89b6';


const getWatchLink = async (imdbId) => {
  try {
    const response = await axios.get(`https://streaming-availability.p.rapidapi.com/v2/get/basic`, {
      params: { country: 'us', imdb_id: imdbId },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      }
    });
    const watchLinks = response.data.result.streamingInfo.us.apple.map(info => info.link);
    return watchLinks;
  } catch (error) {
    console.error(error);
    return null;
  }
};





export default getWatchLink;
