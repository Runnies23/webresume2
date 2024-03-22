import Navbar from '../component/navbar';
import { Link } from 'react-router-dom';
import { Chrono } from "react-chrono";
import Timeline from '../component/timelime';
import Timelinehandmake from '../component/Timelinehandmake';
import Middlejourney from '../component/middlejourney';
import Footer from '../component/footer';
import Buttonmiddletimeline from '../component/Buttonmiddlet';

export default function Diary(){
   return(
   <div>
      <Navbar/>
      <Middlejourney/>
      <Timelinehandmake />  
      <Buttonmiddletimeline/>
      <Footer/>
   </div>
   );
}