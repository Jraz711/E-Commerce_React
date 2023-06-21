import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import { getAllProductsThunk } from './store/slices/products.slice'
function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
