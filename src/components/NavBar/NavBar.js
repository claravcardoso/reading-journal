import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''}>
          Página Inicial
        </NavLink>
      </li>
      <li>
        <NavLink to="/sobre" className={({ isActive }) => isActive ? styles.activeLink : ''}>
          Sobre
        </NavLink>
      </li>
      <li>
        <NavLink to="/lista" className={({ isActive }) => isActive ? styles.activeLink : ''}>
          Lista de Livros
        </NavLink>
      </li>
      <li>
        <NavLink to="/cadastrar" className={({ isActive }) => isActive ? styles.activeLink : ''}>
          Cadastrar
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
