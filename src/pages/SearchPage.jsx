
import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getSearchPersonAPI, getSearchMovieAPI, getSearchTvAPI } from '../services/allAPI';


const SearchPage = () => {

  
  const [placeholder, setPlaceholder] = useState('Search for Movies...'); // Default placeholder



  const location = useLocation(); // Get current URL path
  const inputRef = useRef(null);  // Create a reference for the input field


  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchType, setSearchType] = useState('movie'); // Default to movie search
  


  const handleSearchTypeInPlaceholder = (type) => {
    setSearchType(type);

    // Update placeholder dynamically
    if (type === 'movie') {
        setPlaceholder('Search for Movies...');
    } else if (type === 'tv') {
        setPlaceholder('Search for TV Shows...');
    } else if (type === 'person') {
        setPlaceholder('Search for Actors...');
    }

    // Focus the input field
    inputRef.current?.focus();
};




  // for selecting input field for typing
  const handleMovieClick = () => {
    if (inputRef.current) {
        inputRef.current.focus();
    }
};




  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    setSearchQuery('')
    setSearchResults([]); // Clear previous results when switching search type

  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

   const userData = sessionStorage.getItem("user");
   const userId = userData ? JSON.parse(userData)._id : null
   console.log("userId :" , userId);
   


    setLoading(true);
    setError('');

    try {
      let response;
      if (searchType === 'movie') {
        response = await getSearchMovieAPI(userId,searchQuery);
      } else if (searchType === 'tv') {
        response = await getSearchTvAPI(userId,searchQuery);
      } else{
        if(searchType === 'person'){
          response = await getSearchPersonAPI(userId,searchQuery);
        }

      }

      console.log(`${searchType} search results:`, response);
      setSearchResults(response.data.content || []);
    } catch (err) {
      setError('Error fetching search results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        {/* Search Filter Buttons */}
        <div className='flex justify-center gap-3 mb-4'>
          <button  onClick={() => {handleSearchTypeChange('movie'), handleMovieClick(),handleSearchTypeInPlaceholder('movie')}} className={`py-2 px-4 rounded ${searchType === 'movie' ? 'bg-amber-50 text-black' : 'bg-red-600 hover:bg-red-700'}`}>
            Movies
          </button>
          <button  onClick={() => {handleSearchTypeChange('tv'),handleMovieClick(),handleSearchTypeInPlaceholder('tv')}} className={`py-2 px-4 rounded ${searchType === 'tv' ? 'bg-amber-50 text-black' : 'bg-red-600 hover:bg-red-700'}`}>
            TV Shows
          </button>
          <button  onClick={() => {handleSearchTypeChange('person'),handleMovieClick(),handleSearchTypeInPlaceholder('person')}} className={`py-2 px-4 rounded ${searchType === 'person' ? 'bg-amber-50 text-black' : 'bg-red-600 hover:bg-red-700'}`}>
            Actors
          </button>
        </div>

        {/* Search Form */}
        <form className='flex gap-2 items-stretch mb-8 max-w-2xl mx-auto' onSubmit={handleSearch}>
          <input
          ref={inputRef}
            type='text'
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className='w-full p-2 rounded bg-gray-800 text-white'
          />
          <button type='submit' className='bg-red-700 hover:bg-red-700 text-white p-2 rounded'>
            <Search className='size-6' />
          </button>
        </form>

        {/* Error message */}
        {error && <div className='text-red-500 text-center mb-4'>{error}</div>}

        {/* Loading state */}
        {loading ? (
          <div className='text-center text-white'>Loading...</div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {searchResults.length === 0 ? (
              <div className='text-center ms-[275px] text-white col-span-4'>No results found</div>
            ) : (
              searchResults.map((item, index) => (
                <div key={index} className='bg-gray-800 p-4 rounded'>
                  <Link to={`/watch/${item.id}`}>
                    <img
                      className='h-[300px] lg:h-[300px] lg:w-full rounded mx-auto'
                      src={item.poster_path || item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path || item.profile_path}` : 'https://via.placeholder.com/500x750'}
                      alt={item.title || item.name}
                    />
                    <h2 className='mt-2 text-xl font-bold text-center'>{item.title || item.name}</h2>
                  </Link>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

