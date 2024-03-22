
import { Link } from 'react-router-dom';
import Sky from '../assets/picture/diary/skysportday.jpg'

export default function NewMydiaryfirst(){
   return(
    <div className='w-full   h-auto pt-20 flex flex-col  items-center'>
        <div className=' text-6xl  text-blueback font-bold justify-center relative top-14'>My Diary</div>
        <div className='w-128 h-fit3 relative  bg-gradient-to-r from-gradi to-blueback -rotate-3 overflow-x-hidden mt-20 overflow-hidden mb-16'></div>   
        <div className='w-full h-full absolute justify-center flex mt-24 pt-4'>

            <div className='w-3/4 h-2/3 bg-white flex  mt-20 rounded-3xl justify-start gap-20 shadow-lg drop-shadow-lg'>
                <div className='items-center flex ml-20'>
                    <img src={Sky} className='h-3/4 rounded-xl'/>
                </div>
                <div className=' flex items-start mt-32 flex-col gap-10 w-auto text-black'>
                    <div className='text-5xl'>My diary</div>
                    <div className='pt-2 text-xl'>this is what i see and what i have done in my life</div>
                    <Link to="/timeline" className='btn bg-blueback text-white text-2xl pt-4 pb-4 px-7 w-auto h-auto rounded-3xl'> See more.....</Link>
                </div>
            </div>
        </div>
    </div>
   );
}