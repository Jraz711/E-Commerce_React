import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductIdPage from './pages/ProductIdPage'
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
        <Route path="/product/:id" element={<ProductIdPage />} />
      </Routes>
    </div>
  )
}

export default App
