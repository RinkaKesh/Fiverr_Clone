import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Menubar from './components/Menubar'
import Searchbar from './components/Searchbar'
import TrustedDiv from './components/TrustedDiv'
import Slider from './components/Slider'
import sliderImages from './assets/sliderImage'
function App() {
  

  return (
    <>
     <Navbar/>
     <Menubar/>
     <Searchbar/>
     <TrustedDiv/>
     <Slider images={sliderImages} />

    </>
  )
}

export default App
