import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
            <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/create'}>Add Blog</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar