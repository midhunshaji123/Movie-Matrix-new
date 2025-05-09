import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useState } from "react"
import { signUpAPI } from "../services/allAPI"
import toast from "react-hot-toast"



const SignUpPage = () => {

const [userDetails,setUserDetails] = useState({username:"",email:"",password:""})

 
const navigate = useNavigate()



const handleSignup = async (e)=>{
  e.preventDefault()
  const {username,email,password} = userDetails
  
  if(username && email && password){
      try{
        const result = await signUpAPI(userDetails)
        console.log(result);
        if( result.status>=200 && result.status<300 ){
          toast.success(`Welcome ${result.data?.username},Please login to explore our webiste`)
          setUserDetails({username:"",email:"",password:""})
          console.log("Redirecting to login page...");
          navigate('/login')
        }else{
          console.log(result);
        }
        
      }catch(err){
        console.log(err);
        toast.error("Already Existing User")
        setUserDetails({username:"",email:"",password:""})
      }
  }else{
    toast.error("Please fill the form completely")
  }

}


  return (
    <>
      <div className="h-screen w-full hero-bg">
          {/* Header */}
           <Header/> 

        <div className="flex justify-center items-center mt-20 mx-3">
          <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
            <h1 className="text-center text-white text-2xl font-bold mb-4">Sign Up</h1>
            <form onSubmit={handleSignup} className="space-y-4">
  <div>
    <label htmlFor="email" className="text-sm font-medium text-gray-300 block">Email</label>
    <input 
      name="email" 
      id="email" 
      autoComplete="email" 
      value={userDetails.email} 
      onChange={e => setUserDetails({...userDetails, email: e.target.value})} 
      type="email"
      className="w-full px-3 mt-1 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
      placeholder="you@gmail.com"
    />
  </div>
  <div>
    <label htmlFor="username" className="text-sm font-medium text-gray-300 block">Username</label>
    <input 
      name="username" 
      id="username" 
      autoComplete="username" 
      value={userDetails.username} 
      onChange={e => setUserDetails({...userDetails, username: e.target.value})} 
      type="text"
      className="w-full px-3 mt-1 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
      placeholder="Username"
    />
  </div>
  <div>
    <label htmlFor="password" className="text-sm font-medium text-gray-300 block">Password</label>
    <input 
      name="password" 
      id="password" 
      autoComplete="new-password" 
      value={userDetails.password} 
      onChange={e => setUserDetails({...userDetails, password: e.target.value})} 
      type="password"
      className="w-full px-3 mt-1 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
      placeholder="******" 
    />
  </div>
  <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-red-700">
    Sign Up
  </button>
</form>

            <div className="text-center text-gray-400">
              Already have an account?
              <Link to={'/login'} className="text-blue-500 hover:underline mx-2">
              Login 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage