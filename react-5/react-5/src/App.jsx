import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState('')
   // variation 1 --> run on every render
   useEffect(() => {
    console.log('useEffect running on every render mean every time the component is shown')
  }
);
 // variation 2 --> run only on first render
  useEffect(() => {
    console.log('useEffect running only on first render')
  }, []);

  
  // variation 3 --> run only when name changes and on first render
  useEffect(() => {
    console.log('useEffect running only when name changes')
  }, [name]);



  // variation 4 --> --> run only when name changes and on first render and cleanup function
  useEffect(() => {
    console.log('useEffect running only when name changes')
    return () => {
      console.log('cleanup function')
    }
  }, [name]);
  const changehandler = (e) => {
    setName(e.target.value)
  
    
  }

  return (
  <div>
    <input type="text" onChange={changehandler} />
    <h1>Hello {name}</h1> 
  </div>
  )
}

export default App
