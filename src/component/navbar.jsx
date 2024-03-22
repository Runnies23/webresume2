import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
      <header className={` z-50 font-sans size-28 fixed navbar w-full bg-white shadow-xl drop-shadow-xl font-bold`}>
  <div className="flex-1 ">
    <a className="btn btn-ghost text-5xl px-10  w-2/5 text-blue-600">Runnies</a>
  </div>
  <div className=" justify-end flex-none w-3/5 ">
    <ul className=" text-xl menu menu-horizontal px-10 bg-red-1 gap-16 text-black">
      <li><Link to="/">Home</Link></li> 
      <li><Link to="/">About me </Link></li>  
      <li><Link to="/">Project</Link></li>
      <li><div className="dropdown">
            <div tabIndex={0} role="button" className="">Diary</div>
            <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
              <div className="card-body">
                <h3 className="card-title">Announce</h3>
                <p>ขออภัย ณ ปัจจุบันยังอยู่ในการพัฒนา</p>
              </div>
            </div>
          </div>
      </li>
      <li><Link to="/">Contact</Link></li>

      <div className="dropdown dropdown-end"> 
    </div>
    </ul>
  </div>

</header>
  );
};

export default Navbar;