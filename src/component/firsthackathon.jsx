import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Make sure to import Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Singlebox from './singlebox';
import sx from '../assets/picture/diary/sx.jpg'
import sky2 from '../assets/picture/diary/sky1.jpg'
import ICT from '../assets/picture/diary/ICT.jpg'
import ARIDCom from '../assets/picture/diary/ARIDCom.jpg'
import SPU8 from '../assets/picture/diary/spu.jpg'
import bangmod from '../assets/picture/diary/bangmod.jpg'
import Robot01 from '../assets/picture/diary/Robot01.jpg'
import software from '../assets/picture/diary/software.jpg'
import drone from '../assets/picture/diary/drone.jpg'
import motiongraphic from '../assets/picture/competitive/motiongraphic.jpg'

   const Firsthackation = () => {
      const settings = {
        dots: true,
        infinite: false, // Enable infinite looping for smooth auto-scrolling
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-scrolling
        autoplaySpeed: 8000, // Auto-scroll every 3000 milliseconds (3 seconds)
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     
       const slidesData = [
         { id: 1, content: 'Competitive',description: 'This is what competitve i do and what i got from there',picture : sx},
         { id: 2, content: 'ARID Hackathon ',description: 'อันนี้การเเข่งขันนวัตกรรมเพื่อพัฒนาย่านอารีย์ จัดโดย NIA เเละ ARI Inovation Distrist',picture : ARIDCom},
         { id: 3, content: 'Sx hackathon',description: 'เข้ารอบ 15 ทีมในการเเข่งขันนวัตกรรมเพื่อ...',picture : sx},
         { id: 4, content: 'ศิลปหัตถกรรมครั้งที่ 70 โครงงาน software ',description: 'ได้รับเหรียญทอง ในการเเข่งขันศิลปหัตถกรรม โครงงาน software ระดับเขต 1 ของกรุงเทพมหานคร',picture : software},
         { id: 5, content: 'CARC',description: 'เข้าร่วมการเเข่งขันโดรน',picture : drone},
         { id: 6, content: 'BangMod Hackathon',description: 'เข้าร่วมการเเข่งขัน Bangmod Hackathonไ ด้อันดับที่ 76 จากอันดับ 203 เป็นการเเข่งขันเขียนโปรเเกรมโดยใช้ภาษา C กับ C++ (ผมใช้ C นะครับ)',picture : bangmod},
         { id: 7, content: '8.8 Challenge',description: 'ผ่านเข้าการคัดเลือกชิงชนะเลิศ ในคณะการสร้างเจ้าของธุรกิจ',picture : SPU8},
         { id: 8, content: 'SPU Sustainability Hackfest',description: 'เข้าร่วมการเเข่งขัน ',picture : SPU8},
         { id: 9, content: 'ICT',description: 'เข้าร่วมการเเข่งขันตอบคำถามคอมพิวเตอร์ที่คณะวิทยาคอมของมจธ. ',picture : ICT},
         { id: 10, content: 'ศิลปหัตถกรรมครั้งที่ 71 หุ่นยนต์ขึ้นสูง',description: 'ได้รับเหรียญทองเเดงในการเเข่งขันหุ่นยนต์ขั้นสูง เเข่งเมื่อวันที่ 30 มกราคม 2567 ที่โรงเรียนทวีธาภิเศก',detail : 'เเต่ความในใจอยากที่ได้มากกว่านี้เเต่เเค่นี้ก็พอใจเเล้วเพราะเป็นครั้งเเรกในการเเข่งขันหุ่นยนต์ที่เริ่มจากศูนย์ไม่มีอะไรเลย ผมได้ทำทั้งการปริ้น3d เเละการตัด CNC ของพลาสปูดที่เป็นโครงร่างของหุ่นยนต์ ที่วาดในonshape เเละได้ใช้อปุกรณ์ที่เคยทำลองมาใช้งานจริงอย่าง motordrive,Color sensor,IR sensor,Servo motor ',picture : Robot01},
         { id: 11, content: 'ศิลปหัตถกรรมครั้งที่ 71 motion graphic',description: 'ได้รับเหรียญทองในการเเข่งขันmotion graphic เเข่งเมื่อวันที่ 2 กุมภาพันธ์ 2567 ที่โรงเรียนโพธิ์สาร ',picture : motiongraphic},
       ];
     
    return (
        <div className=' bg-white flex flex-col mt-32'>
            <div className='flex justify-center'>
               <div  className='text-6xl text-blueback font-bold items-center'>Competitive</div>
            </div>
            <div className='w-128 h-fit3 absolute  bg-gradient-to-r from-blueback to-gradi rotate-3 -left-16 overflow-x-hidden mt-20'></div>   
           <Slider {...settings} className='pt-24'>
           {slidesData.map((slide) => (
              <div key={slide.id} className={slide.big ? 'big-slide' : 'normal-slide'}>
                 <Singlebox slide={slide} />
              </div>
           ))}
           </Slider>
        </div>
   );
}

export default Firsthackation;