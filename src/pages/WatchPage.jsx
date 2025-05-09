// original code
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { getDetailsAPI, getSimilarMovieAPI, getMovieorTvTrailer } from '../services/allAPI'; // Added getSimilarMoviesAPI
import SERVER_URL from '../services/serverURL';
import { useContext } from 'react';
import { contentTypeContext } from '../contexts/ContextAPI';

const WatchPage = () => {

    const {contentType,setContentType} = useContext(contentTypeContext)

    
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null); // To store movie details
    const [similarMovies, setSimilarMovies] = useState([]); // To store similar movies
    const [currentIndex, setCurrentIndex] = useState(0);

    const { id } = useParams(); // Get the movie ID from URL params
    
    console.log("id", id);

    useEffect(() => {
        console.log(`Fetching trailer from: ${SERVER_URL}/${contentType}/${id}/trailer`);

        if (!id) {
            console.warn("Movie ID is not available yet.");
            return; // Stop execution if id is not available
        }

        // Fetch trailer
        const fetchTrailer = async () => {
            try {
                console.log("Fetching trailer from:", `${SERVER_URL}/movie/${id}/trailer`);

                const response = await getMovieorTvTrailer(contentType,id);
                console.log("response", response);

                setTrailerUrl(`https://www.youtube.com/watch?v=${response.data.trailers[currentIndex].key}`);
            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
        };

        // Fetch movie details
        const fetchMovieDetails = async () => {
            try {
                const response = await getDetailsAPI(contentType,id);
                console.log("Movie details response:", response);
                setMovieDetails(response.data.content); // Set the movie details
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        // Fetch similar movies
        const fetchSimilarMovies = async () => {
            try {
                const response = await getSimilarMovieAPI(contentType,id);
                console.log("Similar movies response:", response);
                setSimilarMovies(response.data.similar); // Set similar movies
            } catch (error) {
                console.error("Error fetching similar movies:", error);
            }
        };

        fetchTrailer();
        fetchMovieDetails(); // Fetch movie details when the page loads
        fetchSimilarMovies(); // Fetch similar movies when the page loads
    }, [id, currentIndex]);  // Added currentIndex to the dependencies

    return (
        <>
            <div className='bg-black min-h-screen text-white'>
                <div className='mx-auto container px-4 py-8 h-full'>
                   <div className='mt-[-50px] ml-7'> <Navbar /></div>
                    <div className='flex justify-between items-center mb-4 mt-20'>
                        <button className='bg-gray/70 hover:bg-gray-500 text-white py-2 px-4 rounded'>
                           
                        </button>

                        <button className='bg-gray/70 hover:bg-gray-500 text-white py-2 px-4 rounded'>
                            
                        </button>
                    </div>

                    {/* Trailer Section */}
                    <div className='aspect-video mb-8 p-2 sm:px-10 md:px-32'>
                        {trailerUrl ? (
                            <ReactPlayer
                                controls
                                width='100%'
                                height='70vh'
                                className='mx-auto overflow-hidden rounded-lg'
                                url={trailerUrl}
                            />
                        ) : (
                            <p className='text-center'>Loading trailer...</p>
                        )}
                    </div>

                    {/* Movie details */}
                    <div className='flex flex-col md:flex-row items-center justify-between gap-20 max-w-6xl mx-auto'>
                        <div className='mb-4 md:mb-0'>
                            {/* Check if movieDetails exists */}
                            {movieDetails ? (
                                <>
                                    <h2 className='text-5xl font-bold'>{movieDetails?.title}</h2>
                                    <p className='mt-2 text-lg'>
                                        {movieDetails.overview}
                                    </p>
                                    <p className='mt-2 text-lg text-gray-400'>
                                        Release Date: {movieDetails.release_date}
                                    </p>
                                    <p className='mt-2 text-lg text-gray-400'>
                                        Runtime: {movieDetails.runtime} mins
                                    </p>
                                </>
                            ) : (
                                <p className='text-lg text-gray-400'>Loading movie details...</p>
                            )}
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movieDetails ? movieDetails.poster_path : ''}`}
                            alt={movieDetails ? movieDetails.title : 'Loading...'}
                            className='max-h-[600px] rounded-md'
                        />
                    </div>

                    {/* Similar Movies Section */}
                    <div className='mt-12 max-w-5xl mx-auto relative'>
                        <h3 className='text-3xl font-bold mb-4'>
                            Similar Movies/Tv Shows
                        </h3>

                        <div className='flex overflow-x-scroll scrollbar-hide gap-4 pb-4 group'>
                            {similarMovies.length > 0 ? (
                                similarMovies.map((movie) => (
                                    <Link key={movie.id} to={`/watch/${movie.id}`} className='w-52 flex-none'>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                            alt={movie.title}
                                            className='w-full h-auto rounded-md'
                                        />
                                        <h4 className='mt-2 text-lg font-semibold'>{movie.title}</h4>
                                    </Link>
                                ))
                            ) : (
                                <p className='text-lg text-gray-400'>Loading similar movies...</p>
                            )}

                            <ChevronRight className='absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-red-600 text-white rounded-full' />
                            <ChevronLeft className='absolute top-1/2 -translate-y-1/2 left-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-red-600 text-white rounded-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WatchPage;







