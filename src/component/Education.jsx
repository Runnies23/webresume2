import educationpic from '../assets/picture/Education.png'
import html from  '../assets/picture/html.png'
import css from  '../assets/picture/css.png'
import figma from  '../assets/picture/figma.png'
import tailwind from  '../assets/picture/tailwind.png'
import mongodb from  '../assets/picture/mongodb.png'
import expressjs from  '../assets/picture/expressjs.png'
import react from  '../assets/picture/react.png'
import vite from  '../assets/picture/vite.png'
import nodejs from  '../assets/picture/nodejs.png'
import vegas from  '../assets/picture/vegas.png'
import photoshop from  '../assets/picture/photoshop.png'
import Illustrator from  '../assets/picture/Illustrator.png'
import c from  '../assets/picture/c.png'
import javascript from  '../assets/picture/javascript.png'
import python from  '../assets/picture/python.png'
import yolo from  '../assets/picture/yolo.png'
import opencv from '../assets/picture/opencv.png'


import { Link } from 'react-router-dom';

export default function Education(){
   return(
    <div className='navbar gap-10 justify-center items-start mt-20 text-black w-fit'>
      <div className='flex flex-col w-1/2 '>
         <header className='text-6xl font-bold text-blueback'>Education</header>
         <main className='flex justify-center mt-10'>
            <img src={educationpic} className='size-1/4'/>
            <div className='flex-col flex justify-center gap-52'>
               <div className='text-3xl'>
                  <div className=' text-2xl'>โรงเรียนอัสสัมชัญธนบุรี</div>
                  <div className=' text-xl'>ระดับประถมศึกษา 1 - 6</div>
                  </div>
               <div className=''>
                  <div className=' text-2xl'>โรงเรียนนวมินทราชินูทิศ สตรีวิทยา พุทธมณฑล</div>
                  <div className=' text-xl'>ระดับมัธยมศึกษา 1 - 5</div>
                  </div>
            </div>
         </main>
      </div>
      <div className='flex flex-col  w-1/2 pr-20'>
         <header className='text-6xl font-bold text-blueback'>Technical skill</header>
         <div className='flex w-full h-fit2 my-5 gap-2 text-black font-bold'>
            <div className='w-1/2  border bg-white rounded-xl drop-shadow-xl shadow-xl flex flex-col items-center'>
               <div className=' text-blueback text-2xl mt-4'>Web develop</div>
               <div className='flex mt-5'>
                  <div className=' items-center flex flex-col'>
                     <div>html</div>
                     <img src={html} className='h-20'/>
                  </div>
                  <div className=' items-center flex flex-col '>
                     <div className='flex flex-col items-center'>
                        <div>css</div>
                        <img src={css} className='h-20'/>
                     </div>
                     <div  className='flex flex-col items-center'>
                        <div>tailwind</div>
                        <img src={tailwind} className='h-20'/>
                     </div>
                  </div>
                  <div className=' items-center flex flex-col'>
                     <div></div>
                     <div className='h-20 w-20 bg-white'></div>
                  </div>
                  <div className=' items-center flex flex-col'>
                     <div>figma</div>
                     <img src={figma} className='h-20'/>
                  </div>
               </div>
               
               <div className='flex gap-2'>
                  <div className=' text-blueback text-2xl mt-4'>MERN</div>
                  <div className=' text-black text-2xl mt-4'>stack</div>
               </div> 
               <div className='flex mt-5'>
                  <div className=' items-center flex flex-col'>
                     <div className='flex '>
                        <div className=' text-blueback'>M</div>
                        <div>ongo db</div>
                     </div>
                     
                     <img src={mongodb} className='h-20'/>
                  </div>
                  <div className=' items-center flex flex-col'>
                     <div className='flex '>
                        <div className=' text-blueback'>E</div>
                        <div>xpress.js</div>
                     </div>
                     <img src={expressjs} className='h-20'/>
                  </div>
                   <div className=' items-center flex flex-col '>
                     <div className='flex flex-col items-center'>
                        <div className='flex '>
                           <div className=' text-blueback'>R</div>
                           <div>eact</div>
                        </div>
                        <img src={react} className='h-20'/>
                     </div>
                     <div  className='flex flex-col items-center'>
                        <div>Vite</div>
                        <img src={vite} className='h-20'/>
                     </div>
                  </div>
                  <div className=' items-center flex flex-col'>
                     <div className='flex '>
                        <div className=' text-blueback'>N</div>
                        <div>ode.js</div>
                     </div>
                     <img src={nodejs} className='h-20'/>
                  </div>
               </div>
            </div>
            <div className='w-1/2  border bg-white rounded-xl drop-shadow-xl shadow-xl flex flex-col items-center'>
               <div className=' text-blueback text-2xl mt-4'>Media</div>
               <div className='flex mt-5 gap-2'>
                  <div className=' items-center flex flex-col'>
                     <div>Vegas pro</div>
                     <img src={vegas} className='h-24'/>
                  </div>
                  <div className=' items-center flex flex-col '>
                     <div className='flex flex-col items-center'>
                        <div>Photoshop</div>
                        <img src={photoshop} className='h-24'/>
                     </div>
                  </div>
                  
                  <div className=' items-center flex flex-col'>
                     <div>Illustrator</div>
                     <img src={Illustrator} className='h-24'/>
                  </div>
               </div>
               <div className=' text-blueback text-2xl mt-4'>Programming language</div>
               <div className='flex mt-5 gap-2'>
                  <div className=' items-center flex flex-col'>
                     <div>Javascript</div>
                     <img src={javascript} className='h-24'/>
                  </div>
                  <div className=' items-center flex flex-col '>
                     <div className='flex flex-col items-center'>
                        <div>C</div>
                        <img src={c} className='h-24'/>
                     </div>
                  </div>
                  
                  <div className=' items-center flex flex-col'>
                     <div>Python</div>
                     <img src={python} className='h-24'/>
                  </div>
               </div>
               <div className=' text-blueback text-2xl mt-4'>Image processing </div>
               <div className='flex mt-5 gap-2'>
                  <div className=' items-center flex flex-col'>
                     <div>Yolo</div>
                     <img src={yolo} className='h-24'/>
                  </div>
                  <div className=' items-center flex flex-col '>
                     <div className='flex flex-col items-center'>
                        <div>Opencv</div>
                        <img src={opencv} className='h-24'/>
                     </div>
                  </div>
                  <div className=' items-center flex flex-col'>
                     <div></div>
                     <div className='h-20 w-20 bg-white'></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   );
}