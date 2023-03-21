// Import the axios library
// axios is a library that makes it easy to send HTTP requests
import axios from 'axios';

// Store the API key in a constant variable
const API_KEY = '146efc923dmshd7fd146022b4b75p1a3965jsn3005c3ee89b6';

// Define an async function that gets the watch link for a given IMDB ID
const getWatchLink = async (imdbId) => {
  try {
    // Send an HTTP GET request to the Streaming Availability API
    // The response will contain information about where to watch the movie or TV show
    const response = await axios.get(`https://streaming-availability.p.rapidapi.com/v2/get/basic`, {
      params: { country: 'us', imdb_id: imdbId },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      }
    });

    // Extract the streaming links from the response and return them as an array
    const watchLinks = response.data.result.streamingInfo.us.apple.map(info => info.link);
    return watchLinks;
  } catch (error) {
    // If an error occurs, log it to the console and return null
    console.error(error);
    return null;
  }
};

// Define an async function that gets information about where to stream a given movie or TV show
const getStreamingInfo = async (imdbId, region) => {
  if (!Array.isArray(imdbId)) {
    imdbId = [imdbId];
  }

  try {
    // Send an HTTP GET request to the Streaming Availability API
    // The response will contain information about where to watch the movie or TV show
    const response = await fetch(`https://streaming-availability.p.rapidapi.com/v2/get/basic?country=${region}&imdb_id=${imdbId.join(',')}`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      }
    });

    // Parse the response as JSON data
    const data = await response.json();

    // If the response does not contain any results, return null
    if (!data.results || data.results.length === 0) {
      return null;
    }

    // Extract the streaming links from the response and return them as an array
    const watchLinks = data.results[0].streamingInfo.us.apple.map(info => info.link);
    return watchLinks;
  } catch (error) {
    // If an error occurs, log it to the console and return null
    console.error(error);
    return null;
  }
};


// Export the getStreamingInfo function as the default export of this module
export default getStreamingInfo;
