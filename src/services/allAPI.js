import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";



// signupAPI : http://localhost:3003/signup
export const signUpAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/signup`,reqBody)
}

// loginAPI : http://localhost:3003/login
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}


// getTrendingMovieAPI : http://localhost:3003/trending/movie
export const getTrendingMovieorTvAPI = async (contentType)=>{
    return await commonAPI("GET",`${SERVER_URL}/trending/${contentType}`,{})
}




// // getMovieTrailerAPI  :  http://localhost:3003/trending/movie
export const getMovieorTvTrailer = async (contentType,id) => {
    return await commonAPI("GET", `${SERVER_URL}/${contentType}/${id}/trailer`, {});
};


// getDetailsAPI : http://localhost:3003/movie/:id/details
export const getDetailsAPI = async (contentType,id) => {
    return await commonAPI("GET", `${SERVER_URL}/${contentType}/${id}/details`, {});
};



// getSimilarMovieAPI : http://localhost:3003/movie/:id/details
export const getSimilarMovieAPI = async (contentType,id) => {
    return await commonAPI("GET", `${SERVER_URL}/${contentType}/${id}/similar`, {});
};



// getMovieCategoryAPI : http://localhost:3003/movie/:id/details
export const getMovieCategoryAPI = async (category) => {
    return await commonAPI("GET", `${SERVER_URL}/movie/${category}`, {});
};



// getTvCategoryAPI : http://localhost:3003/movie/:id/details
export const getTvCategoryAPI = async (category) => {
    return await commonAPI("GET", `${SERVER_URL}/tv/${category}`, {});
};















// getSearchPersonAPI : http://localhost:3003/movie/:id/details
export const getSearchPersonAPI = async (id,query) => {
    return await commonAPI("GET", `${SERVER_URL}/search/person/${id}/${query}`, {});
};



// getSearchMovieAPI : http://localhost:3003/movie/:id/details
export const getSearchMovieAPI = async (id,query) => {
    return await commonAPI("GET", `${SERVER_URL}/search/movie/${id}/${query}`, {});
};



// getSearchTvAPI : http://localhost:3003/movie/:id/details
export const getSearchTvAPI = async (id,query) => {
    return await commonAPI("GET", `${SERVER_URL}/search/tv/${id}/${query}`, {});
};




// getSearchHistoryAPI : http://localhost:3003/movie/:id/details
export const getSearchHistoryAPI = async (id) => {
    return await commonAPI("GET", `${SERVER_URL}/search/${id}/history`, {});
};



// deleteHistoryItemsAPI : http://localhost:3003/movie/:id/details
export const deleteHistoryItemsAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${id}/delete`, {});
};









