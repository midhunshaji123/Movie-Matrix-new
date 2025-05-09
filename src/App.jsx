import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './homepages/HomePage'
import Footer from './components/Footer'
import WatchPage from './pages/WatchPage'
import MovieSlider from './components/MovieSlider'
import SearchPage from './pages/SearchPage'
import SearchHistoryPage from './pages/SearchHistoryPage'
import PageNotFound from './pages/PageNotFound'
import { Toaster } from 'react-hot-toast'



function App() {

 

  return (
    <>
     <Toaster/>

     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/watch/:id' element={ <WatchPage/>}/>
      <Route path='/movies' element={<MovieSlider/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/history' element={<SearchHistoryPage/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
     </Routes>

     <Footer/>

     
    </>
  )
}

export default App
