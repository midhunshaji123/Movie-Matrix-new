import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Trash } from 'lucide-react';
import { deleteHistoryItemsAPI, getSearchHistoryAPI } from '../services/allAPI';

const SearchHistoryPage = () => {
    const [history, setHistory] = useState([]);

    const fetchSearchHistory = async () => {
        const userData = sessionStorage.getItem("user");
        const userId = userData ? JSON.parse(userData)._id : null;

        if (!userId) {
            console.log("User ID not found.");
            return;
        }

        try {
            const response = await getSearchHistoryAPI(userId);
            console.log("response:", response);
            setHistory(response.data.content || []);
        } catch (error) {
            console.error("Error fetching search history:", error);
        }
    };

    useEffect(() => {
        fetchSearchHistory();
    }, []);

    const handleDeleteSearchItem = async (id) => {
        try {
            const result = await deleteHistoryItemsAPI(id);
            if (result.status >= 200 && result.status < 300) {
                fetchSearchHistory();  // Refresh search history after deletion
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-black text-white min-h-screen'>
            <Navbar />
            <div className='max-w-6xl mx-auto px-4 py-8 mt-15'>
                <h1 className='text-3xl font-bold mb-8'>Search History</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                    {history.length > 0 ? (
                        history.map((item, index) => {
                            const imageUrl = item.Image 
                                ? `https://image.tmdb.org/t/p/w500${item.Image}` 
                                : "https://via.placeholder.com/100"; // Fallback image

                            return (
                                <div key={index} className='bg-gray-800 p-4 rounded flex items-start'>
                                    <img 
                                        className='size-16 rounded-full object-cover mr-4' 
                                        src={imageUrl} 
                                        alt={item.title || "History"} 
                                    />
                                    <div className='flex flex-col'>
                                        <span className='text-white text-lg'>{item.title}</span>
                                        <span className='text-gray-400 text-sm'>
                                            {item.createDate ? new Date(item.createDate).toLocaleDateString() : "Unknown Date"}
                                        </span>
                                    </div>
                                    <span className={`py-1 px-3 my-auto min-w-20 text-center rounded-full text-sm ml-auto 
                                        ${item.searchType === 'movie' ? 'bg-red-600' : item.searchType === 'tv' ? 'bg-blue-600' : 'bg-green-600'}`}>
                                        {item.searchType}
                                    </span>
                                    <Trash 
                                        onClick={() => handleDeleteSearchItem(item.id)} 
                                        className='size-5 ml-4 my-auto cursor-pointer hover:fill-red-600 hover:text-red-600' 
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-gray-400">No search history found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchHistoryPage;
