import TimelineCard from "./a bit/timelinecard"
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

export default function Timelinehandmake(){
    const timeline = "relative max-w-t1200 mx-40 pt-40 pb-20"
    const container = "px-10 py-20 relative w-1/2 "
    const container_left = "px-10 py-1 relative w-1/2  left-0 drop-shadow-xl"
    const container_right = "px-10 py-1 relative w-1/2  left-1/2 ml-4"
    const Img_Icon__middle_left = "w-8 h-8 bg-white absolute -right-3 top-32 z-10 overflow-visible"
    const Img_Icon__middle_right = "w-8 h-8 bg-white absolute -left-4 top-32 z-10"
    const text_box = "bg-white rounded-3xl flex gap-4"
 
    const TimelineData = [
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
      ];

   return(
   <div className=" bg-whiterandom text-black pt-10">
        <div className={timeline}>
            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                    <div className="w-8 h-timeline bg-blueback absolute -top-60 left-1 z-10"></div>
                    <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </div>
                    
                </div>

                {TimelineData.filter(event => event.id === 1).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>

            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>

                {TimelineData.filter(event => event.id === 2).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}


            </div>

            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 3).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>

            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                
                {TimelineData.filter(event => event.id === 3).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>

            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 4).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>


            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>

                {TimelineData.filter(event => event.id === 5).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}


            </div>
            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 6).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>


            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>

                {TimelineData.filter(event => event.id === 7).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}


            </div>
            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 8).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>


            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>

                {TimelineData.filter(event => event.id === 9).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}


            </div>
            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 10).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>


            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>

                {TimelineData.filter(event => event.id === 11).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}


            </div>
            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 12).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>


            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>

                {TimelineData.filter(event => event.id === 13).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}


            </div>
            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 14).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>


            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>

                {TimelineData.filter(event => event.id === 15).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}


            </div>
            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 16).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>


            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>

                {TimelineData.filter(event => event.id === 17).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}


            </div>
            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 18).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>


            <div className={container_right}>
                <div className="absolute w-16 h-16 -left-11 top-24 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>

                {TimelineData.filter(event => event.id === 19).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}


            </div>
            <div className={container_left}>
                <div className='absolute right-4 top-32'>
                <div className="absolute  w-16 h-16 -left-3 -top-9 z-20 bg-white rounded-full drop-shadow-xl shadow-xl flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-14 h-14 fill-blueback outline-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                </div>

                {TimelineData.filter(event => event.id === 20).map((event) => (
                    <TimelineCard key={event.id} event={event} />
                ))}

            </div>


        </div>
   </div>
   );
}