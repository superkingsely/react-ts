import React from 'react'
import '../Header/Header.css'
import Navbar from './Navbar/Navbar'
const Header = ({logo}:any) => {
  return (
    <header>
        <h1>{logo}</h1>
        <Navbar/>
    </header>
  )
}

export default Header