
import { Link } from 'react-router-dom';
import Sky from '../assets/picture/diary/skysportday.jpg'

export default function Mydiaryfirst(){
   return(
    <div className='w-full h-screen pt-20 flex flex-col overflow-x-hidden bg-white items-center '>
      <div className=' text-6xl z-10 text-blueback font-bold justify-center'>My Diary</div>
      <div className='w-128 h-fit3 absolute  bg-gradient-to-r from-gradi to-blueback -rotate-3 -left-16 overflow-x-hidden mt-20'></div>   
      <div className='w-3/4 h-2/3 bg-white z-10 flex  mt-20 rounded-3xl justify-start gap-20'>
         <div className='items-center flex ml-20'>
            <img src={Sky} className='h-3/4 rounded-xl'/>
         </div>
         <div className=' flex items-start mt-32 flex-col gap-10 w-auto text-black'>
            <div className='text-5xl'>My diary</div>
            <div className='pt-2 text-xl'>this is what i see and what i have done in my life</div>
            <Link to={`/diary`} className='btn  btn-ghost bg-blueback text-white  px-20 py-10'>
              See more...
            </Link>
         </div>

      </div>
   </div>
   );
}