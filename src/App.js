import getWatchLink from './services/ApiTest.js';

const App = () => {
  const imdbId = 'tt1375666'; // Replace with the IMDb ID
  const handleClick = async () => {
    const watchLink = await getWatchLink(imdbId);
    console.log(watchLink);
  };
  return (
    <div>
      <button onClick={handleClick}>Get Watch Link</button>
    </div>
  );
};

export default App;
