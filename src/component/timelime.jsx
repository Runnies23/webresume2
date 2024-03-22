import chaingmai from '../assets/picture/diary/chaingmai.jpg'
import React from "react"
import { Chrono } from "react-chrono";
import styled from "styled-components";



  const Timeline = () => {
    const items = [
      {
      title: "travel in Chaingmai",
      cardTitle: "travel in Chaingmai",
      url: "",
      cardSubtitle:"",
      cardDetailedText: "28/7/2566-30/7/2566 ไปเที่ยง chaingmai",
      media: {
        type: "IMAGE",
        source: {
          url: chaingmai
        }
      }
    },
    {
      title: "7 December 1941",
      cardTitle: "Pearl Harbor",
      media: {
        source: {
          url: "/pearl-harbor.mp4",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Pearl Harbor"
      }
    },
    {
      title: "7 December 1941",
      cardTitle: "Pearl Harbor",
      media: {
        source: {
          url: "https://www.youtube.com/embed/f6cz9gtMTeI",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Pearl Harbor"
      }
    },
   ];
    return (
      <div className="pt-40 flex justify-center">
         <div style={{ width: '1400px' }}>
            <Chrono items={items} slideShow slideItemDuration={4500} slideShowType="reveal" mode="VERTICAL_ALTERNATING"  className='z-40'/>
         </div>
      </div>
    )
  }

export default Timeline;