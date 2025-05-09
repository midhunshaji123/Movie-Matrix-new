import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'; // Correct import
import { getMovieCategoryAPI, getTvCategoryAPI } from '../services/allAPI';
import { contentTypeContext } from '../contexts/ContextAPI';

const MovieSlider = () => {


  const {contentType,setContentType} = useContext(contentTypeContext)

  // for movie slider
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

// for movie slider
  const [airingTodayTv, setAiringTodayTv] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  


  // Fetch movie data
  useEffect(() => {

    if(contentType === 'movie'){
      const fetchTrendingMovies = async () => {
        try {
          const response = await getMovieCategoryAPI('popular'); // Fetch trending movies
          console.log("Now playing Movies:", response);
          setTrendingMovies(response.data.content); // Assuming response structure has 'results'
        } catch (error) {
          console.error('Error fetching trending movies:', error);
        }
      };
  
      const fetchPopularMovies = async () => {
        try {
          const response = await getMovieCategoryAPI('top_rated'); // Fetch popular movies
          console.log("Popular Movies:", response);
          setPopularMovies(response.data.content); // Assuming response structure has 'results'
        } catch (error) {
          console.error('Error fetching popular movies:', error);
        }
      };
  
      const fetchTopRatedMovies = async () => {
        try {
          const response = await getMovieCategoryAPI('upcoming'); // Fetch top-rated movies
          console.log("Top rated Movies:", response);
          setTopRatedMovies(response.data.content); // Assuming response structure has 'results'
        } catch (error) {
          console.error('Error fetching top-rated movies:', error);
        }
      };


      
// movies
    fetchTrendingMovies();
    fetchPopularMovies();
    fetchTopRatedMovies();

    }else{
      // // fetch Tv shows
const fetchAiringTodayTv = async () => {
  try {
    const response = await getTvCategoryAPI('airing_today'); // Fetch trending movies
    console.log("Airing Today Tv:", response);
    setAiringTodayTv(response.data.content); // Assuming response structure has 'results'
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};

const fetchTopRatedTv = async () => {
  try {
    const response = await getTvCategoryAPI('top_rated'); // Fetch top-rated movies

    setTopRatedTv(response.data.content); // Assuming response structure has 'results'
    console.log("Top rated Tv:", response.data.content);
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
  }
};

// Tv shows
fetchAiringTodayTv()
// // fetchPopularTv()
fetchTopRatedTv()

    }
    
  }, [contentType]);

  return (
   
    


   <div>
    
    {contentType === "movie" ?
     <div className='bg-black text-white relative px-5 md:px-20'>
     {/* Trending Movies Section */}
     <h2 className='mb-4 text-2xl font-bold'>
       Upcoming Movies
     </h2>
     <div className='flex space-x-4 overflow-x-scroll scrollbar-hide'>
       {trendingMovies?.length > 0 ? (
         trendingMovies?.map((movie) => (
           <Link to={`/watch/${movie?.id}`} key={movie?.id} className='min-w-[200px] relative group'>
             <div className='rounded-lg overflow-hidden'>
               <img 
                 src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} // Dynamically render movie poster
                 alt={movie?.title} 
                 className='transition-transform duration-300 ease-in-out group-hover:scale-125'
               />
             </div> 
             <p className='mt-2 text-center'>
               {movie?.title}
             </p>
           </Link>
         ))
       ) : (
         <p>Loading trending movies...</p>
       )}
     </div>

     {/* Navigation Buttons */}
     <button className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center size-12 rounded-full bg-black-50 hover:bg-opacity-75 text-white z-10'>
       <ChevronLeft size={24} />
     </button>
     <button className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center size-12 rounded-full bg-black-50 hover:bg-opacity-75 text-white z-10'>
       <ChevronRight size={24} />
     </button>

     {/* Popular Movies Section */}
     <h2 className='mt-8 mb-4 text-2xl font-bold'>
       Popular Movies
     </h2>
     <div className='flex space-x-4 overflow-x-scroll scrollbar-hide'>
       {popularMovies?.length > 0 ? (
         popularMovies?.map((movie) => (
           <Link to={`/watch/${movie?.id}`} key={movie?.id} className='min-w-[200px] relative group'>
             <div className='rounded-lg overflow-hidden'>
               <img 
                 src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} // Dynamically render movie poster
                 alt={movie?.title} 
                 className='transition-transform duration-300 ease-in-out group-hover:scale-125'
               />
             </div> 
             <p className='mt-2 text-center'>
               {movie?.title}
             </p>
           </Link>
         ))
       ) : (
         <p>Loading popular movies...</p>
       )}
     </div>

     {/* Top Rated Movies Section */}
     <h2 className='mt-8 mb-4 text-2xl font-bold'>
       Top Rated Movies
     </h2>
     <div className='flex space-x-4 overflow-x-scroll scrollbar-hide'>
       {topRatedMovies?.length > 0 ? (
         topRatedMovies?.map((movie) => (
           <Link to={`/watch/${movie?.id}`} key={movie?.id} className='min-w-[200px] relative group'>
             <div className='rounded-lg overflow-hidden'>
               <img 
                 src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} // Dynamically render movie poster
                 alt={movie?.title} 
                 className='transition-transform duration-300 ease-in-out group-hover:scale-125'
               />
             </div> 
             <p className='mt-2 text-center'>
               {movie?.title}
             </p>
           </Link>
         ))
       ) : (
         <p>Loading top-rated movies...</p>
       )}
     </div>

   </div>

   :

   <div className='bg-black text-white relative px-5 md:px-20'>
   {/* Trending Movies Section */}
   <h2 className='mb-4 text-2xl font-bold'>
       Popular Tv Shows
   </h2>
   <div className='flex space-x-4 overflow-x-scroll scrollbar-hide'>
     {airingTodayTv?.length > 0 ? (
       airingTodayTv?.map((tv) => (
         <Link to={`/watch/${tv?.id}`} key={tv?.id} className='min-w-[200px] relative group'>
           <div className='rounded-lg overflow-hidden'>
             <img 
               src={`https://image.tmdb.org/t/p/w500/${tv?.poster_path}`} // Dynamically render movie poster
               alt={tv?.name} 
               className='transition-transform duration-300 ease-in-out group-hover:scale-125'
             />
           </div> 
           <p className='mt-2 text-center'>
             {tv?.name}
           </p>
         </Link>
       ))
     ) : (
       <p>Loading Popular Tv...</p>
     )}
   </div>

   {/* Navigation Buttons */}
   <button className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center size-12 rounded-full bg-black-50 hover:bg-opacity-75 text-white z-10'>
     <ChevronLeft size={24} />
   </button>
   <button className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center size-12 rounded-full bg-black-50 hover:bg-opacity-75 text-white z-10'>
     <ChevronRight size={24} />
   </button>

   {/* Popular Movies Section */}
   <h2 className='mt-8 mb-4 text-2xl font-bold'>
     Top Rated Tv shows
   </h2>
   <div className='flex space-x-4 overflow-x-scroll scrollbar-hide'>
     {topRatedTv ?. length > 0 ? (
       topRatedTv.map((tv) => (
         <Link to={`/watch/${tv?.id}`} key={tv?.id} className='min-w-[200px] relative group'>
           <div className='rounded-lg overflow-hidden'>
             <img 
               src={`https://image.tmdb.org/t/p/w500/${tv?.poster_path}`} // Dynamically render movie poster
               alt={tv?.name} 
               className='transition-transform duration-300 ease-in-out group-hover:scale-125'
             />
           </div> 
           <p className='mt-2 text-center'>
             {tv?.name}
           </p>
         </Link>
       ))
     ) : (
      <p>Loading Top Rated Tv...</p>
     )}
   </div>

 </div>
  }

   </div>
  
  );
};

export default MovieSlider;


