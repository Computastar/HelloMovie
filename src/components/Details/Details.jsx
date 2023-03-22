// Importing necessary components and libraries for the application
import { MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import imdbApikey from '../Recommendations/apikey';
import { useEffect, useState } from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Recommendations from '../Recommendations/Recommendations';
import getWatchInfo from '../WatchInfo/Watchinfo'; 

// Creating and exporting a default function component called Details that accepts a props object
export default function Details(props) {
    // Using the useState hook to set initial state values
    const [data,setData ] = useState('');
    const [id, setId] = useState(props.id);
    // Using the useState hook to set initial state values
    useEffect(() => {
        getDetails(id);
    }, [id]);
     
    // Defining an async function called getDetails that fetches details about a movie using the IMDb API
    const getDetails = async (imdbId) => {
        try {
          const response = await axios.get(`http://www.omdbapi.com/?s=${imdbId}&apikey=${imdbApikey}`); 
      
          // Log the response data to the console
          console.log('Response data:', response.data);
        

          // Extract the relevant details from the response and return them as an object
          const details = {
            title: response.data.title,
            year: response.data.year,
            rating: response.data.imDbRating,
            genres: response.data.genres.split(','),
            plot: response.data.plot,
            directors: response.data.directors.split(','),
            cast: response.data.stars.split(','),
            poster: response.data.image,
            watchLinks: await getWatchInfo(imdbId, 'us')
          };
        
          console.log('Details:',details);

          setData(JSON.stringify(details));
          return details;
        } catch (error) {
          // If an error occurs, log it to the console and return null
          console.error(error);
          return null;
        }
      };
      
      
    // Conditional rendering to display a trailer
    let trailer;
    if (data.trailer === null) {
        trailer = (
            <p className='fs-1 warning text-center'>Trailer not available</p>
        );
    } else {
        trailer = (
            <iframe
                src={data.trailer}
                title={data.title}
                allowFullScreen
            ></iframe>
        );
    }

    return (
        <>
            <section className='py-5 px-2 bg-black bg-gradient'>
                <MDBContainer>
                    <MDBRow>
                        <h2 className='componentTitle text-center'>
                            {data.title}
                        </h2>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='3' className='g-3 text-light'>
                            <ul>
                                <li>
                                    <span className='dText'>Type: </span>
                                    {data.type}
                                </li>
                                <li>
                                    <span className='dText'>Year: </span>
                                    {data.year}
                                </li>
                                <li>
                                    <span className='dText'>Imdb Rating: </span>
                                    {data.rating}
                                </li>
                                <li>
                                    <span className='dText'>
                                        Content Rating:{' '}
                                    </span>
                                    {data.contentRating}
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md='8' className='g-3 text-light'>
                            <p className=''>
                                <span className='dText'>Plot: </span>{' '}
                                {data.plot}
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md='3' className='g-3'>
                            <img
                                src={data.image}
                                alt={data.title}
                                className='img-fluid rounded-5'
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </MDBCol>
                        <MDBCol md='9' className='g-3 '>
                            <div className='ratio ratio-16x9 d-flex justify-content-center'>
                                {trailer}
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <Recommendations id={id} setId={setId} />
        </>
    );
}
