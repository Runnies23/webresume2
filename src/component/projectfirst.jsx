import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ICT from '../assets/picture/diary/ICT.jpg'
import Boxproject from './projectbox';
import library from '../assets/picture/project/library.jpg'
import podomoro from '../assets/picture/project/pomodoro.jpg'
import websiteresume from '../assets/picture/project/resume.jpg'
import project4 from '../assets/picture/project/project-4.png'

const DataLayout = () => {
  const allData = [
    { id: 1, title: 'Library website',tag : "#web development", description: 'Project อันนี้ได้ทำส่งงานวิชา IS ทำ Website ที่เเสดงผลของหนังสือต่างๆ ที่มีข้อมูลอย่างผู้เเต่ง หมวดหมู่ ความนิยม ลักษณะของหนังสือต่างๆ',detail: "ใช้ MERN Stack (web developer) M - Mongodb , E - Express.js , R - React , N - Node.js", image: library , href: 'https://github.com/Runnies23/15-1-2024'},
    { id: 2, title: 'Pomodoro Method',tag : "#web development", description: 'เว็ปที่เขียนเอาไว้ใช้ในการทำงาน หรือ เรียน Podomoro ',detail : "Podomoro เป็น วิธีการเรียนรู้ที่มีประสิทธิภาพ", image: podomoro , href: 'https://main--bucolic-custard-88fc53.netlify.app/'},
    { id: 3, title: 'Website Resume', description: 'เว็ป ณ ตอนนี้ที่ทุกคนได้ชมกับอยู่', image: websiteresume , href: '/'},
    { id: 4, title: 'Prachatipathai website', description: 'เป็นผลงานwebsiteที่เอาเสนอเข้ากรม....เพื่อที่เข้าประกวด....', image: project4 , href: 'https://main--preachatiphathai.netlify.app/'}
  ];

  const [displayData, setDisplayData] = useState(allData.slice(0, 2)); // Start with 2 items
  const [loadMoreCount, setLoadMoreCount] = useState(2);

  const handleLoadMore = () => {
    const moreData = allData.slice(loadMoreCount, loadMoreCount + 2);
    setDisplayData([...displayData, ...moreData]);
    setLoadMoreCount(loadMoreCount + 2);
  };

  return (
    <div className='bg-white flex flex-col mt-32'>
      <div className='flex justify-center'>
        <div className='text-6xl text-blueback font-bold items-center'>Project</div>
      </div>  
      <div className='flex justify-center'>
        <div className='w-3/4 h-auto'>
          {displayData.map(item => (
            <Boxproject key={item.id} item={item} />
          ))}
        </div>
      </div>
      {loadMoreCount < allData.length && (
        <div className='flex justify-center my-10'>
          <button onClick={handleLoadMore} className='btn btn-ghost bg-blueback text-white'>
            Load more...
          </button>
        </div>
      )}
    </div>
  );
};

export default DataLayout;
