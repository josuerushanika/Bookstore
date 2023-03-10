import React from 'react'
import { NavLink,} from 'react-router-dom';
  
const Navbar = () => {
  return (
    
       <header>
        <h1>BOOK STORE</h1>
        <nav>
          <NavLink to="/">Books</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </nav>
      </header>
    
  )
}

export default Navbar
