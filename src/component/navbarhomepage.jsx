import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbarhomepage = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the window
            behavior: 'smooth' // Optional: adds a smooth scrolling effect
        });
        };
    const scrollToDiary = () => {
        window.scrollTo({
        top: 1800, // Scroll to the top of the window
        behavior: 'smooth' // Optional: adds a smooth scrolling effect
        });
    };
    const scrollToCompetitive = () => {
        window.scrollTo({
        top: 3150, // Scroll to the top of the window
        behavior: 'smooth' // Optional: adds a smooth scrolling effect
        });
    };
    const scrollToProject = () => {
        window.scrollTo({
        top: 4220, // Scroll to the top of the window
        behavior: 'smooth' // Optional: adds a smooth scrolling effect
        });
    };

  return (
      <header className={` z-50 font-sans size-28 fixed navbar w-full bg-white shadow-xl drop-shadow-xl font-bold`}>
  <div className="flex-1 ">
    <a className="btn btn-ghost text-5xl px-10  w-2/5 text-blue-600">Runnies</a>
  </div>
  <div className=" justify-end flex-none w-3/5 ">
    <ul className=" text-xl menu menu-horizontal px-10 bg-red-1 gap-8 text-black mr-24 ">
        <button onClick={scrollToTop} className='btn btn-ghost text-xl font-bold hover:bg-blue-300 rounded-xl'>Home</button>
        <button onClick={scrollToDiary} className='btn btn-ghost text-xl font-bold hover:bg-blue-300 rounded-xl '>Diary</button>
        <button onClick={scrollToCompetitive} className=' btn btn-ghost text-xl font-bold hover:bg-blue-300 rounded-xl'>Competitive</button>
        <button onClick={scrollToProject} className='btn btn-ghost text-xl font-bold hover:bg-blue-300 rounded-xl '>Project</button>
        <Link to='/timeline' className='btn btn-ghost text-xl font-bold hover:bg-blue-300 rounded-xl '>Timeline</Link>
      <div className="dropdown dropdown-end"> 
    </div>
    </ul>
  </div>

</header>
  );
};

export default Navbarhomepage;