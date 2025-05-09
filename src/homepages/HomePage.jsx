import { Link } from "react-router-dom"
import WatchPage from "../pages/WatchPage"
import AuthScreen from "./AuthScreen"
import HomeScreen from "./HomeScreen"
import MovieSlider from "../components/MovieSlider"


const HomePage = () => {

  const user = sessionStorage.getItem("token");
  return (
    <>
      <div>{user? <HomeScreen/> : <AuthScreen/>}</div>








    </>
  )
}

export default HomePage