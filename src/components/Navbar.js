import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (

  <header>
    <div className={styles.header}>
      <h1>BookStore  </h1>
      <nav>
        <NavLink to="/">Books</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>
    </div>

    <button type="button">
      <FaUser />
    </button>
  </header>

);

export default Navbar;
