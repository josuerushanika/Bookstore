import React from 'react'
import { NavLink,} from 'react-router-dom';
  
const Navbar = () => {
  return (
    
       <header>
        <nav>
          <NavLink to="/">Books</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </nav>
      </header>
    
  )
}

export default Navbar
