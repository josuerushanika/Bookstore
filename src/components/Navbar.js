import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (

  <header>
    <div className={styles.header}>
      <h1>BookStore CMS </h1>
      <nav className={styles.NavLinkContainer}>
        <NavLink className={styles.NavLinkB} to="/">BOOKS</NavLink>
        <NavLink className={styles.NavLink} to="/categories">CATEGORIES</NavLink>
      </nav>
      <div className={styles.userIconContainer}>
        <FaUser className={styles.Mask} />
      </div>
    </div>
  </header>

);

export default Navbar;
