import { MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import apikey from '../Recommendations/apikey';
import { useEffect, useState } from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Recommendations from '../Recommendations/Recommendations';

export default function Details(props) {
    const [data, setData] = useState('');

    useEffect(() => {
        getDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getDetails() {
        try {
            const response = await axios.get(
                `https://imdb-api.com/en/API/Title/${apikey}/${props.id}/FullActor,FullCast,Posters,Images,Trailer,Ratings`
            );
            const details = {
                title: response.data.title,
                year: response.data.year,
                type: response.data.type,
                image: response.data.image,
                plot: response.data.plot,
                trailer: response.data.trailer.linkEmbed,
                runTime: response.data.runtimeStr,
                stars: response.data.stars,
                contentRating: response.data.contentRating,
                rating: response.data.imDbRating,
            };

            setData(details);
        } catch (error) {
            console.log(error);
        }
    }
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
                        <MDBCol md='9' className='g-3'>
                            <div className='ratio ratio-16x9'>{trailer}</div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            {/* <Recommendations id={props.id} /> */}
        </>
    );
}
