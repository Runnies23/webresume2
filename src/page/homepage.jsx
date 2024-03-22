import Navbarhomepage from '../component/navbarhomepage';
import { Link } from 'react-router-dom';
import First from '../component/firstseen';
import Education from '../component/Education';
import Mydiaryfirst from '../component/mydiaryfirst';
import Carouseldiary from '../component/Carousel';
import Firsthackation from '../component/firsthackathon';
import Projectfirst from '../component/projectfirst';
import Footer from '../component/footer';
import NewMydiaryfirst from '../component/newdiarylook';
import NewFirsthackation from '../component/newFirsthackation';
import Feedback from '../component/staticfeedback';


export default function Home(){
   return(
   <div className='h-auto w-auto overflow-x-hidden'>
      <Navbarhomepage/>
      <First/>
      <Education/>
      <NewMydiaryfirst/>
      <Carouseldiary/>
      <NewFirsthackation/>
      <div className='h-2 w-full bg-white relative -top-2 z-20'>
      </div>
      <Projectfirst/>
      <Footer/>
   </div>
   );
}