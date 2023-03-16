// Add a movie or TV show to the user's watched list
function addToWatched(id) {
  // Get the current watched list from localStorage or create a new empty array if it doesn't exist yet
  let watched = localStorage.getItem('watched');
  if (watched) {
    watched = JSON.parse(watched);
  } else {
    watched = [];
  }
  // Only add the ID to the watched list if it's not already there
  if (!watched.includes(id)) {
    watched.push(id);
    localStorage.setItem('watched', JSON.stringify(watched));
  }
}

// Get the user's watched list from localStorage or return an empty array if it doesn't exist yet
function getWatchedList() {
  const watchedListJSON = localStorage.getItem('watchedList');
  if (watchedListJSON) {
    return JSON.parse(watchedListJSON);
  } else {
    return [];
  }
}

// Get a list of recommendations (Mr Grants code)
// Filter out any recommendations that the user has already watched
function getRecommendations() {
  let recommendations = // code for recommendations here 
  let watched = localStorage.getItem('watched');
  if (watched) {
    watched = JSON.parse(watched);
    recommendations = recommendations.filter(recommendation => !watched.includes(recommendation.id));
  }
  return recommendations;
}

export { addToWatched, getWatchedList, getRecommendations };