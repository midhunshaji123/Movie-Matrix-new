import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Info, Play } from 'lucide-react';
import { getTrendingMovieorTvAPI } from '../services/allAPI';
import MovieSlider from '../components/MovieSlider';
import { contentTypeContext } from '../contexts/ContextAPI';

const HomeScreen = () => {

    const {contentType,setContentType} = useContext(contentTypeContext)

    const [trendingContent, setTrendingContent] = useState(null);


    useEffect(() => {
        handleGetTrendingContent();
    }, [contentType]); // Re-fetch when contentType changes

    const handleGetTrendingContent = async () => {
        try {
            const result = await getTrendingMovieorTvAPI(contentType);
            console.log("Content Type:",contentType);
            if(contentType === "movie"){
              console.log("Trending Movie :",result);
              
            }else{
              console.log("Trending Tv :",result);
              
            }
            
            if (result?.status >= 200 && result?.status < 300) {
                setTrendingContent(result.data?.content);
                
            } else {
                console.error("Invalid API response", result);
            }
        } catch (err) {
            console.error("API Fetch Error:", err);
        }
    };

    return (
        <>
            <div className="relative h-screen text-white">
                {/* ✅ Pass contentType & setContentType to Navbar */}
                <Navbar />  

                {/* Background Image */}
                <img
                    src={ trendingContent?.backdrop_path ? `https://image.tmdb.org/t/p/original${trendingContent.backdrop_path}` : "https://via.placeholder.com/800"}
                    alt={trendingContent?.title || "Loading..."}
                    className="absolute top-0 left-0 w-full h-full object-cover -z-50"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50" aria-hidden="true" />

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
                    <div className="max-w-2xl">
                        <h1 className="mt-4 text-6xl font-extrabold">
                            {trendingContent?.title || trendingContent?.name || "Loading..."}
                        </h1>
                        <p className="mt-2 text-lg">{trendingContent?.release_date || trendingContent?.first_air_date || "Unknown Year"}</p>
                        <p className="mt-4 text-lg">
                            {trendingContent?.overview || "No description available."}
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row mt-8 w-full">
                        <Link
                            to={`/watch/${trendingContent?.id}`}
                            className="bg-white hover:bg-white/80 w-27 mt-3 text-black font-bold py-2 px-4 rounded mr-4 flex items-center "
                        >
                            <Play className="size-6 mr-2 fill-black" />Play
                        </Link>

                        {/* <Link
                            to={`/watch/${trendingContent?.id}`}
                            className="bg-gray-500/70 hover:bg-gray-500 w-34 mt-3 text-white py-2 px-4 rounded flex items-center"
                        >
                            <Info className="size-6 mr-2" />More info
                        </Link> */}
                    </div>
                </div>
            </div>

            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />
            <div className='h-8 w-full bg-black' aria-hidden='true' />
            <div className=''>
                <MovieSlider/>
            </div>
        </>
    );
};

export default HomeScreen;












