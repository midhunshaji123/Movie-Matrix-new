import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Menu, Search } from 'lucide-react';
import { contentTypeContext } from '../contexts/ContextAPI';
import toast from 'react-hot-toast';
import { useMobileMenu } from '../contexts/MobileMenuContext';

const Navbar = () => {

    const { contentType, setContentType } = useContext(contentTypeContext)

    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // const toggleMobileMenu = () => {
    //     setIsMobileMenuOpen(prev => !prev);
    //   };

    const navigate = useNavigate();

    const handleLogout = () => {
        const tokenRemove = sessionStorage.removeItem("token");  // Remove JWT Token
        const userRemove = sessionStorage.removeItem("user");   // Remove User Info (if stored)
        if(handleLogout){
            toast.success("Logout Successfull")
        }

        navigate("/login");  // Redirect to Login Page

    };

    return (
        <>
            <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
                {/* Logo & Desktop Navbar Items */}
                <div className='flex items-center gap-10 z-50'>
                    <Link to={"/"}>
                        <img src="/MLogo2.png" alt="MovieNest" className='w-32 sm:w-40' />
                    </Link>

                    {/* Desktop navbar items */}
                    <div className='hidden sm:flex gap-5 items-center'>
                        <Link to={"/"}>
                            <button
                                onClick={() => setContentType('movie')}
                                className={`hover:scale-120 ${contentType === "movie" ? "text-red-500 font-bold" : ""}`}
                            >
                                Movies
                            </button>
                        </Link>
                        <Link to={"/"}>
                            <button
                                onClick={() => setContentType('tv')}
                                className={`hover:scale-120 ${contentType === "tv" ? "text-red-500 font-bold" : ""}`}
                            >
                                TV Shows
                            </button>
                        </Link>
                        <Link to={"/history"} className='hover:scale-120'>
                            Search History
                        </Link>
                    </div>
                </div>

                {/* Search, Logout & Mobile Menu Icon */}
                <div className='flex gap-2 items-center z-50'>
                    <Link to={"/search"}>
                        <Search className="size-6 cursor-pointer mr-2" />
                    </Link>

                    <LogOut onClick={handleLogout} className='size-6 cursor-pointer' />

                    {/* Mobile Menu Button */}
                    <div className='sm:hidden'>
                        <Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
                    </div>
                </div>

                {/* Mobile Navbar Items */}
                {isMobileMenuOpen && (
                    <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800 p-2'>
                        <Link to={"/"}
                            onClick={() => { dispatch(setContentType("movie")); toggleMobileMenu(); }}
                            className={`block p-2 hover:underline ${contentType === "movie" ? "text-red-500 font-bold" : ""}`}
                        >
                            Movies
                        </Link>
                        <Link to={"/"}
                            onClick={() => { dispatch(setContentType("tv")); toggleMobileMenu(); }}
                            className={`block p-2 hover:underline ${contentType === "tv" ? "text-red-500 font-bold" : ""}`}
                        >
                            TV Shows
                        </Link>
                        <Link to={"/history"} className='block p-2 hover:underline' onClick={toggleMobileMenu}>
                            Search History
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;

