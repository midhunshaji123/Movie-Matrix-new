import React, { useState } from 'react'
import Header from '../components/Header'
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthScreen = () => {



    return (
        <div className='hero-bg relative'>
            {/* Navbar */}
            <Header />

            {/* Hero section */}
            <div className='mt-[-125px] flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto h-dvh'>
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>Unlimited movies, Tv shows, and more</h1>
                <p className='text-lg mb-4'>Watch anywhere. Cancel anytime</p>
                <p className='mb-4'>Ready to watch? Enter your email to create or restart your membership.</p>

                <form  className='flex flex-col md:flex-row gap-4 w-1/2'>
                    {/* <input type="email"
                        className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
                        placeholder="Email address"
                        id="email" /> */}
                    <Link to={'/signup'} className='ms-45'>
                        <button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
                            Get Started
                            <ChevronRight className='size-8 md:size-10' />
                        </button>
                    </Link>
                </form>
            </div>

            {/* separator */}

            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

            {/* 1st section */}

            {/* <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'> */}
                    {/* Left side */}
                    {/* <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h2>
                        <p className='text-lg md:text-xl'>Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div> */}
                    {/* Right  Side */}
                    {/* <div className='flex-1 relative'>
                        <img src="/tv.png" alt="Tv image" className='mt-4 z-20 relative' />
                        <video className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10'
                            playsInline
                            autoPlay={true}
                            muted
                            loop>
                            <source src='/hero-vid.m4v' type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div> */}

            {/* separator */}
            {/* <div className='h-2 w-full bg-[#232323]' aria-hidden='true' /> */}

            {/* 2nd section */}
            {/* <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'> */}
                    {/* left side */}
                    {/* <div className='flex-1'>
                        <div className='relative'>
                            <img src="/stranger-things-lg.png" alt="stranger Things img" className='mt-4' />
                            <div className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-1/2 bg-black w-3/4 lg:w-1/2 h-24 border-slate-500 rounded-md px-2'>
                                <img src="/stranger-things-sm.png" alt="image" className='h-full' />
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex flex-col gap-0'>
                                        <span className='text-md lg:text-lg font-bold'>Stranger Things</span>
                                        <span className='text-sm text-blue-500'>Downloading...</span>
                                    </div>
                                    <img src="/download-icon.gif" alt="" className='h-12' />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* right side */}
                    {/* <div className='flex-1 md:text-left text-center'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h2>
                        <p className='text-lg md:text-xl'>Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                </div>
            </div> */}

            


             {/* 3rd section */}

             {/* <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'> */}
                    {/* Left side */}
                    {/* <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Watch everywhwere</h2>
                        <p className='text-lg md:text-xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div> */}

                    {/* Right  Side*/}
                    {/* <div className='flex-1 relative overflow-hidden'>
                        <img src="/device-pile.png" alt="Device image" className='mt-4 z-20 relative' />
                        <video className='absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10 max-w-[63%]'
                            playsInline
                            autoPlay={true}
                            muted
                            loop>
                            <source src='/video-devices.m4v' type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div> */}

             {/* separator */}
             {/* <div className='h-2 w-full bg-[#232323]' aria-hidden='true' /> */}

             {/* 4th section */}
             {/* <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'> */}
                     {/* Left side */}
                      {/* <div className='flex-1 relative'>
                        <img src="/kids.png" alt="Enjoy on your TV" className='mt-4' />
                      </div> */}


                     {/* right side */}
                     {/* <div className='flex-1 text-center md:text-left'>
                         <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Create profiles for kids</h2>
                         <p  className='text-lg md:text-xl'>Send kids on adventures with their favorite characters in a space made just for them-free with your membership</p>
                     </div>
                </div>

             </div> */}

        </div>
    )
}

export default AuthScreen