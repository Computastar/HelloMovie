import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

const Trailer_Player = (props) => {
    const [videoURL, setVideoURL] =	useState("");

    console.log(props);

    movieTrailer('ron burgundy').then((res) => {
        console.log(res)
        setVideoURL(res)
    })

return (
    <div>
	{/*Using 'ReactPlayer' component to display the video*/}
	<ReactPlayer url={videoURL} controls={true}/>
	</div>
);
}

export default Trailer_Player;
