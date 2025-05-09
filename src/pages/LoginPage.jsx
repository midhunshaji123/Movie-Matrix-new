import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import toast from "react-hot-toast";
import { loginAPI } from "../services/allAPI";

const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginDetails;

    if (email && password) {
      setLoading(true)
      try {
        const result = await loginAPI(loginDetails);
        if (result.status >= 200 && result.status < 300) {
          const user = result.data.user; // Extract user object
          console.log("user id :" , user._id);
          

          // Store user data
          sessionStorage.setItem("user", JSON.stringify(user));
          sessionStorage.setItem("token", result.data.token);

          // Store user ID in local storage
          localStorage.setItem("userId", user.id);
          

          // Clear login form
          setLoginDetails({ email: "", password: "" });

          // Redirect to home
          navigate("/");
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
        toast.error("Incorrect email/password");
      }finally{
        setLoading(false)
      }
    } else {
      toast.error("Please fill the form completely");
    }
  };

  return (
    <>
      <div className="h-screen w-full hero-bg">
        {/* Header */}
        <Header />

        <div className="flex justify-center items-center mt-20 mx-3">
          <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
            <h1 className="text-center text-white text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                  Email
                </label>
                <input
                  onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
                  type="email"
                  className="w-full px-3 mt-1 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                  placeholder="Username"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-300 block">
                  Password
                </label>
                <input
                  onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
                  type="password"
                  className="w-full px-3 mt-1 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                  placeholder="******"
                  id="password"
                />
              </div>
              <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-red-700">
               {loading ? "Loading..." : "Login"}
              </button>
            </form>
            <div className="text-center text-gray-400">You Don't have an account?</div>
            <div className="text-center text-gray-400">
              Already have an account?
              <Link to={'/signup'} className="text-blue-500 hover:underline mx-2">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
