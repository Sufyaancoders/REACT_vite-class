import React from 'react'
import { FaAnglesDown , FaAnglesUp } from "react-icons/fa6";
const card = (props) => {   
    if (!props.review) {
        return <div>No review data available</div>;
    }
   let reviews = props.review;
        return (
            <div className='flex flex-col   relative  rounded-md p-8 rounded-md '>
                <div className=' al absolute left-2/2 -top-[5rem] transform -translate-x-1/2' >
               
                <div className='w-[100px] h-[100px] bg-violet-400 rounded-full absolute -top-2 left-1 -z-[10]'></div>
                    <img className='aspect-square rounded-full w-[100px] h-[100px] z-24' 
                    src={reviews.img} alt="img"/>
                    {/* <div className='w-[100px] h-[100px] bg-violet-400 rounded-full absolute -top-1 left-1 z-[10]'>

                    </div> */}
                </div>
                <div className='text-center mt-4'>
                    <p className='font-bold text-2xl' >{reviews.name}</p>
                </div>
                <div className='text-center mt-2'>
                    <p className='text-violet-300 text-2xl uppercase '>{reviews.job}</p>
                </div>
              
            </div>
        )
    }
    export default card