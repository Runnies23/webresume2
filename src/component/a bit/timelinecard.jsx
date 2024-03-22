import sky2 from '../../assets/picture/diary/sky1.jpg'
import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/picture/diary/Robot01.jpg'

const TimelineCard = ({event}) => {
    return(
        <div className="bg-white rounded-3xl flex gap-4 shadow-xl">
            <img src={event.picture} className="h-56 my-4 ml-4 rounded-2xl"/>
            <div className="flex flex-col my-4">
                <div className="text-3xl">{event.content}</div>
                <div className="text-2xl">{event.description}</div>
                <div className=' max-w-md'>
                    <div className="text-xl break-words" ></div>
                </div>
                <div className=" py-4 bg-blueback w-fit px-5 rounded-3xl btn text-white mt-2 ">See more...</div>
            </div>    
        </div>
    );
 }

 export default TimelineCard;