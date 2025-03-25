import React, { useEffect, useContext, use } from 'react'
import './App.css'
import Header from './Components/header'
import Blog from './Components/blog'
import Pagination from './Components/pagination'
import AppContext from './Context/appcontext'

function App() {
  const { fetchinitialData } = useContext(AppContext);
useEffect(() => {
  fetchinitialData();
}
, []);


  return (

     <div>
    
      <Header></Header>
       <Blog></Blog>
       <Pagination></Pagination>
     </div>
  )
}

export default App
