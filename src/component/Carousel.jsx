import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import Carouselbox from "./Carouselbox";
import sky from '../assets/picture/diary/skysportday.jpg'
import sky2 from '../assets/picture/diary/sky1.jpg'
import ICT from '../assets/picture/diary/ICT.jpg'
import badminton from '../assets/picture/diary/badminton.jpg'
import sxunlucky from '../assets/picture/diary/sxunlucky.jpg'
import mv from '../assets/picture/diary/mv.jpg'
import bangmod from '../assets/picture/diary/bangmod.jpg'
import Illastatorpic from '../assets/picture/diary/Illastatorpic.png'
import Robot01 from '../assets/picture/diary/Robot01.jpg'
import chaingmai from '../assets/picture/diary/chaingmai.jpg'
import SPU8 from '../assets/picture/diary/spu.jpg'
import SCIDAY from '../assets/picture/diary/sciday.jpg'
import Rayong from '../assets/picture/diary/Rayong.jpg'
import ARIDCom from '../assets/picture/diary/ARIDCom.jpg'
import ARIDCeli from '../assets/picture/diary/ARIDCeli.jpg'
import Golfdrive from '../assets/picture/diary/Golfdrive.jpg'
import KMUTTopenhouse from '../assets/picture/diary/KMUTTopenhouse.jpg'
import SUPANBURI from '../assets/picture/diary/SUPANBURI.jpg'
import printed3d from '../assets/picture/diary/printed3d.jpg'
import sw3open from '../assets/picture/diary/sw3open.jpg'

const Carouseldiary = () => {
  const settings = {
    dots: true,
    infinite: false, // Enable infinite looping for smooth auto-scrolling
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 10000, // Auto-scroll every 3000 milliseconds (3 seconds)
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,  
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
    { id: 1, content: 'travel in Chaingmai',description: '28/7/2566-30/7/2566 ไปเที่ยง chaingmai' ,picture : chaingmai,
      detail : 'hello world'},
    { id: 2, content: '8.8 At spu',description: '8/8/2566 Picth idea by plastic to 3d printing @ SPU university' ,picture : SPU8},
    { id: 3, content: 'Sciday',description: '10/8/2566 เป็น staff ของการเเข่งขันในงานวันวิทยาศาสตร์ของโรงเรียน ในการสร้างสะพานรับน้ำหนัก' ,picture : SCIDAY},
    { id: 4, content: 'Rayong',description: '13/8/2566-14/8/2566 travel to Rayong in holiday' ,picture : Rayong},
    { id: 5, content: 'ARID Competitive',description: '17/8/2566 ARID Hackathon Competitive day' ,picture : ARIDCom},
    { id: 6, content: 'ARID Celibrate',description: '20/9/2566 ARID Hackathon วันรับรางวัล' ,picture : ARIDCeli},
    { id: 7, content: 'Bad day',description: '23/9/2566 เป็นวันที่ได้ไป นำเสนอในงาน Sx hackathon หลังจากผ่านเข้ารอบ 15 ทีมสุดท้าย' ,picture : sxunlucky},
    { id: 8, content: 'Mv เพื่อนไม่สนิท',description: '29/09/66  ปิดกองถ่ายMv ของเพลง เพื่อนไม่เล่นเพื่อน เป็นการถ่ายmv ส่งประกวด GDH ตัดคลิปกันมันส์เลย' ,picture : mv},
    { id: 9, content: 'Golf drive',description: '9/10/2566 ฝึกขับรถกอฟ' ,picture : Golfdrive},
    { id: 10, content: 'Bangmod Openhouse',description: '14/10/2566 ไปเปิดบ้านKMUTT' ,picture : KMUTTopenhouse},
    { id: 11, content: 'ตีเเบตก่อนเปิดเทอม',description: '27/10/2566 สนุกมาก เหนื่อยสุดๆ ยิ่งท้ายๆ ก้าวไม่ค่อยออก ill come back na',picture : badminton},
    { id: 12, content: 'ICT Challange',description: '27/11/2566 เป็นวันที่ได้ไปทำการเเข่งขันตอบคำถามคอมพิวเตอร์ของคณะวิทยาการคอมพิวเตอร์ที่ มจธ. ',picture : ICT},
    { id: 13, content: 'เเข่งบาส 2566',description: '31/11/2566 เป็นกีฬาสีวันเเรก เเละเป็นวันเเข่งชิงชนะเลิศบาสเก็ตบอลม.ปลาย ',detail : 'detail about this day',picture : sky},
    { id: 14, content: 'วันกีฬาสี',description: '1/12/2566 เป็นวันเเรกของเดือนธันวาคน ที่เป็นวันกีฬาสี เเละ เราได้เเชมท์ ครับ',picture : sky2},
    { id: 15, content: 'SUPANBURI',description: '23/12/2566-24/12/2566 เที่ยวสระบุรี' ,picture : SUPANBURI},
    { id: 16, content: 'Bangmod hack',description: '13/1/2567 เป็นวันที่ได้ไป นำเสนอในงาน Sx hackathon หลังจากผ่านเข้ารอบ 15 ทีมสุดท้าย' ,picture : bangmod},
    { id: 17, content: 'First print 3d',description: '15/1/2567 first print 3d ' ,picture : printed3d},
    { id: 18, content: 'Sw3 Openhouse',description: '19/1/2567 MY school Sw3 openhouse ' ,picture : sw3open},
    { id: 19, content: 'First time Illastator',description: '20/1/2567 ได้ใช้งาน adobe Illatator ครั้งเเรก' ,picture : Illastatorpic},
    { id: 20, content: 'Robot full build for first time',description: '30/1/2567 เเข่งขันศิลปหัตถกรรม' ,picture : Robot01},
    // Add more slides as needed
  ];

  return (
   <div className=' bg-white'>
      <Slider {...settings}>
      {slidesData.map((slide) => (
         <div key={slide.id} className={slide.big ? 'big-slide' : 'normal-slide'}>
            <Carouselbox slide={slide} />
         </div>
      ))}
      </Slider>
   </div>
);
};

export default Carouseldiary;
