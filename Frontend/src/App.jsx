import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import EventHandling from './components/EventHandling'
import {SnackbarProvider} from 'notistack'
import ManageUsers from './components/ManageUsers'
import AddProduct from './components/AddProduct'
import ProductListing from './components/ProductListing'
import ManageProduct from './components/ManageProduct'
import UpdateProduct from './components/UpdateProduct'
const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/EventHandling' element={<EventHandling />} />
        <Route path='/ManageUsers' element={<ManageUsers />} />
        <Route path='/ManageProduct' element={<ManageProduct />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/ProductListing' element={<ProductListing />} />
        <Route path='/UpdateProduct/:id' element={<UpdateProduct />} />
      </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App