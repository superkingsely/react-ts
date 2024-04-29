import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'

const Layout = ({children}:any) => {
  return (
    <div className="app">
    <Header logo='Blog'/>
    
    {children}
  </div>
  )
}

export default Layout