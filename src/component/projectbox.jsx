import React from 'react';
import { Link } from 'react-router-dom';
import ICT from '../assets/picture/diary/ICT.jpg'

const Boxproject = ({ item }) => {
  return (
    <div className='bg-white w-full h-auto m-4 rounded-xl shadow-xl drop-shadow-2xl p-4 flex gap-10 text-black '>
      <img src={item.image} className='h-96 object-cover mt-2 shadow-xl border'/>
      <div className='mt-10 flex flex-col '>
         <h3 className='text-5xl font-bold mb-3'>{item.title}</h3>
         <p className='text-blueback ml-4'>{item.tag}</p>
         <p className='text-xl mt-8'>{item.description}</p>
         <p className='text-xl my-3'>{item.detail}</p>
         
         <div>
            <a href={item.href} className='btn btn-ghost bg-blueback text-white'>
            See more
            </a>
         </div>

      </div>
    </div>
  );
};

export default Boxproject;