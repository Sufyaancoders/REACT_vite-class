import './App.css'
import Navbar from './Component/navbar'
import Filter from './Component/filter'
import Cards from './Component/cards'
import { apiurl, data } from './Component/data'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CircularProgress, Box } from '@mui/material'

function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("ALL")
  // const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // setLoading(true)
        const response = await fetch(apiurl)
        const apiData = await response.json()
        console.log('Fetched data:', apiData)
        setProducts(apiData);
      } catch (error) {
        console.error('Fetch error:', error)
        toast.error(`Error fetching data: ${error.message}`)
      } finally {
        // setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  // if (loading) {
  //   return (
  //     // <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
  //     //   <CircularProgress />
  //     // </Box>
  //     <div></div>
  //   )
  // }

  return (
    <div>
      <Navbar/>
      <Filter 
        filterdata={data}
        category={category} 
        setCategory={setCategory} 
      />
      <Cards 
        products={products} 
        category={category}
        liked={liked}
        setLiked={setLiked}
      />
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        hideProgressBar={false}
      />
    </div>
  )
}

export default App
