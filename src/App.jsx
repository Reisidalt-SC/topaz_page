import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Essence from './components/essence/essence'
import Products from './components/products/products'
import Beneficts from './components/beneficts/beneficts'
import Process from './components/process/process'
import History from './components/history/history'
import Testimonials from './components/testimonials/testimonials'
import Advertising from './components/advertising/advertising'
import Order from './components/order/order'
import Contact from './components/contact/contact'
import Doubts from './components/doubts/doubts'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <Header />
      <div className='box_wrapper'>
        <Hero/>
        <Essence/>
        <Products/>        
        <Beneficts/> 
        <Process/>
        <History/> 
        <Testimonials/>
        <Advertising/>
        <Order/>  
        <Contact/>
        <Doubts/>            
      </div>
      <Footer/>  
    </>
  )
}

export default App
