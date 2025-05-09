import { Link } from "react-router-dom"



const Header = () => {
  return (
    <>
    
    <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src='/MLogo2.png' alt="" className="w-52" />
        </Link>
        <Link to={"/login"} className="text-white bg-blue-600 py-1 px-2 rounded">
        Sign In
        </Link>
      </header>
    
    </>
  )
}

export default Header