import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Additem from './Create/Additem'


const Main = () => {

  return (
    <main>
      <Routes>
        {/* pages */}
        <Route  path='/' element={<Home/>}/>
        <Route  path='/create' element={<Additem/>}/>
      </Routes>
    </main>
  )
}

export default Main