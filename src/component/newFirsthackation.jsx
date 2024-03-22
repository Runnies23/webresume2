import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Make sure to import Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Singlebox from './singlebox';
import sx from '../assets/picture/diary/sx.jpg'
import Sky from '../assets/picture/diary/sky1.jpg'
import ICT from '../assets/picture/diary/ICT.jpg'
import ARIDCom from '../assets/picture/diary/ARIDCom.jpg'
import SPU8 from '../assets/picture/diary/spu.jpg'
import bangmod from '../assets/picture/diary/bangmod.jpg'
import Robot01 from '../assets/picture/diary/Robot01.jpg'
import software from '../assets/picture/diary/software.jpg'
import drone from '../assets/picture/diary/drone.jpg'
import motiongraphic from '../assets/picture/competitive/motiongraphic.jpg'

   const NewFirsthackation = () => {
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
        <div className='flex flex-col'>
            <div className='flex justify-center'>
               <div  className='text-6xl text-white font-bold items-center top-44 relative z-20'>Competitive</div>
            </div>
            <div class="custom-shape-divider-top-1711010192 bg-gradient-to-r from-blueback to-gradi bg-ro fill-white z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className=' bg-gradient-to-r from-blueback to-gradi bg-ro z-20'>
                <div className='  '>
                <Slider {...settings} className='pt-24 ab'>
                {slidesData.map((slide) => (
                    <div key={slide.id} className={slide.big ? 'big-slide' : 'normal-slide'}>
                        <Singlebox slide={slide} />
                    </div>
                ))}
                </Slider>
                </div>
            </div>
            <div class="custom-shape-divider-top-1711010978 fill-white bg-gradient-to-r from-gradi  to-blueback bg-ro rotate-180 horizontal relative -top-1 z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
   );
}

export default NewFirsthackation;