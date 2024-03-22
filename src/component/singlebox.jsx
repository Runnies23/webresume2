import { Link } from 'react-router-dom';
import photoshop from '../assets/picture/photoshop.png'


import React from 'react';

const Singlebox = ({ slide }) => {
  return (
    <div className='flex justify-center' >
      <div className='bg-white w-3/4 h-helo rounded-2xl flex gap-4 drop-shadow-xl shadow-xl text-black'>
         <img src={slide.picture} className='h-helo rounded-l-xl'/>
         <div className='flex-col'>
            <div className='flex-col flex pt-10 mx-8 gap-y-8 mt-10'>
               <h2 className='text-6xl'>{slide.content}</h2>
               <p className='text-xl'>{slide.description}</p>
            </div>   
            <div className='flex justify-items-end  mt-10 ml-8'>
              <Link to={`/competitive/${slide.id}`} className='btn btn-ghost bg-blueback text-white'>
                  See more...
              </Link>
            </div>
         </div>
      </div>
      



      
      {/* Render other slide data as needed */}
    </div>
  );
};

export default Singlebox;
