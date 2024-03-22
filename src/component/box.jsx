import Runnies from '../assets/picture/mypic.jpg'
import { Link } from 'react-router-dom';
import github from '../assets/picture/github.png'
import facebook from '../assets/picture/facebook.png'
import discord from '../assets/picture/discord.png'

export default function Box(){
   return(
    <div className='w-fit'>
      <div className='navbar h-screen z-10 '>
         <div className=' flow-root w-1/2 bg-white ml-32 p-10 rounded-3xl drop-shadow-xl shadow-xl text-black'>
            <div className=' text-6xl'>hello </div>
            <div className=' text-6xl'>I’m Runnies!</div>
            <div className='text-2xl mt-20'>Welcome to my website,I interest of technology - computer looking for (university) 
            <div className='text-2xl'>1st - KMUTT CPE University</div>
            <div className='text-2xl '>2nd - com eng / com sci ku</div>
            <div className='text-2xl'>3rd - com sci kmutt - dsi cs </div>
         </div>
         <button className="btn btn-ghost btn-lg bg-bookbuttom outline-bookbuttom  text-white"><Link to="/menu">Booking...</Link></button>
      </div>
      <div className='mt-32 w-1/2  flex-col flex '>
         <div className='flex absolute  justify-center items-center flex-col mt-40 text-white font-mono text-2xl '>
            <div className='w-1/3 p-5 bg-blueback mr-96 text-center rounded-full '>Nattapong</div>
            <div className='w-1/3 p-5  bg-blueback ml-96 text-center rounded-full'>Pakdeeviboon</div>
         </div>
         <img src={Runnies} className='w-2/5 '/>
         <div className=' bg-blueback flex w-2/5 flex-col drop-shadow-xl'>
            <div className='flex items-center my-2 mx-4 gap-4'>
               <a href="https://github.com/Runnies23">
                     <img className='h-14' src={github}/>
               </a>
               <a href="https://github.com/Runnies23" className='text-2xl pl-4 text-white '>Runnies23</a>
            </div>
            <div className='flex items-center my-2 mx-4 gap-4'>
               <a href="https://www.facebook.com/profile.php?id=100042979534210">
                  <img className='h-14' src={facebook}/>
               </a>
               <a href="https://www.facebook.com/profile.php?id=100042979534210" className=' text-2xl pl-4 text-white'>ณัฐพงษ์ ภักดีวิบูลย์</a>
            </div>
            <div className='flex items-center my-2 mx-4 gap-4'>
               <a href="https://discordapp.com/users/616486134695854104">
                  <img className='h-14' src={discord}/>
               </a>
               <a href="https://github.com/Runnies23" className=' text-2xl pl-4 text-white' >runnnnlnwza007x</a>
            </div>
         </div>
      </div>
</div>
   </div>
   );
}