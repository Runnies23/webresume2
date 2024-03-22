import { Link } from 'react-router-dom';
import github from '../assets/picture/github.png'
import facebook from '../assets/picture/facebook.png'
import discord from '../assets/picture/discord.png'


export default function Footer(){
   return(
    <div className='w-full h-auto bg-blueback flex justify-center items-center flex-col text-white'>
      <div className='w-3/4 h-auto flex flex-col justify-center items-center gap-y-4 mt-6'>
         <div className='flex gap-96 justify-center items-center'>
            <div className=''>
               <div className='text-6xl'>Runnies</div>
            </div>
            <div className='flex gap-10'>
               <div className=''>
                  <div>About me</div>
               </div>
               <div className=''>
                  <div>Diary</div>
               </div>
               <div className=''>
                  <div>Project</div>
               </div>
            </div>
         </div>
         <div className='flex gap-10 mt-2'>
            <a href="https://github.com/Runnies23">
               <img className='h-14' src={github}/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100042979534210">
               <img className='h-14' src={facebook}/>
            </a>
            <a href="https://discordapp.com/users/616486134695854104">
               <img className='h-14' src={discord}/>
            </a>
         </div>
      </div>
      <div className=' w-8/12 h-1 mt-5 bg-white mb-2'></div>
      <div className='mb-4'>Nattapong Pakdeeviboon - Runnies</div>
   </div>
   );
}