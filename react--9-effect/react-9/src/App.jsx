import { useState } from 'react'
import './App.css'
import Random from './Components/random'
import Tag from './Components/tag'
import {Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg uppercase w-11/12 text-center mt-[40px] ml-[15px] py-2 px-10 text-4xl font-bold ">
        Random Gifs
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
   </div>
    </div>
    </div>
  )
}

export default App
