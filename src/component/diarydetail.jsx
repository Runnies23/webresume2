import { Link } from 'react-router-dom';
import photoshop from '../assets/picture/photoshop.png'


import React from 'react';

const Carouselbox = ({ slide }) => {
  return (
    <div className='flex justify-center text-black' >
      <div className=' bg-white w-3/4 h-1/2 rounded-2xl flex drop-shadow-xl shadow-xl '>
         <img src={slide.picture} className='h-80 rounded-l-xl'/>
         <div className='flex-col'>
            <div className='flex-col flex pt-10 mx-5'>
               <h2 className='text-4xl'>{slide.content}</h2>
               <p className='text-xl mt-4'>{slide.description}</p>
            </div>   
            <div className='flex justify-items-end ml-10 mt-10'>
              <Link to={`/details/${slide.id}`} className='btn btn-ghost bg-blueback text-white'>
                See more...
              </Link>
            </div>
         </div>
      </div>
      



      
      {/* Render other slide data as needed */}
    </div>
  );
};

export default Carouselbox;
