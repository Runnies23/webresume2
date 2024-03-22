import { useState } from "react";
import FeedbackModal from "./feedbackmodal";

const Feedback = () => {
   const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="">
         <button onClick={() => setIsOpen(true)}  className=" fixed bottom-10 right-10 w-40 h-20 bg-blueback flex justify-center items-center rounded-3xl z-40 text-white drop-shadow-xl shadow-lg">
            <div className="text-xl"> Give Feedback</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white mr-3">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
         </button>
         {isOpen && (
            <div className="fixed inset-0 h-full w-full z-40 bottom-10 right-4">
            <button onClick={() => setIsOpen(false)}  className=" fixed bottom-10 right-10 w-40 h-20 bg-blueback flex justify-center items-center rounded-3xl z-40 text-white ">
               <div className="text-xl"> Close  </div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white mr-3 rotate-45">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
            </button>
            <div className="fixed right-8 bottom-6 mx-auto p-5 border w-1/4 shadow-lg rounded-3xl backdrop-blur-sm bg-blueback">
               <div className="mt-3 text-center">
                  <h3 className="text-lg leading-6 font-medium text-white">Feedback</h3>
                  <div className="mt-2 px-7 py-3">
                  <input type="text" placeholder="write something :)" className="input input-bordered input-lg w-full bg-navbar rounded-index h-12  text-xl" />
                  </div>
                  <div className="items-center px-4 py-3 gap-40 flex justify-center">
                  <div className="w-full h-auto items-start flex ml-4">
                     <button onClick={() => { setIsOpen(false); setIsOk(true); }} className="px-4 py-2 bg-buttonmainbgcolr text-black text-base font-medium rounded-2xl h-14 w-24 shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                        Submit
                     </button>
                  </div>
                  </div>
               </div>
            </div>
            </div>
         )}
         
      </div>
      
   );
}

export default Feedback;