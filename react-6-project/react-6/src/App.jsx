import { useState } from 'react'
import Testominal from './Component/testominal'
import './App.css'
import review from './Component/data'
function App() {
  

  return (
   <div className='flex flex-col w-[100vw] h-[100vh] justify-center item-center bg-gray-300'>
    <div className=' text-center items-center'>
    <h1 className="text-4xl font-bold mb-8 text-gray-700">Our Testimonials</h1>
    <div className='bg-voliet-400 w-[85vw] md:w-[600px] mx-auto p-10 mt-16 rounded-md shadow-xl bg-gray-100 relative'>
  <Testominal review={review}/>
  </div>
   </div>
   </div>
  )
}

export default App
