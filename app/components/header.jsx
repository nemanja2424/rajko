'use client';
import { useEffect, useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const closeNav = () => {
    setNavOpen(false)
  }



  return (
    <header className={`${styles.header} ${navOpen ? styles.open : ''}`}>
      <div className={styles.topRow}>
        <a href={"/"}><Image src="/assetss/nemanja logo.png" alt="logo" width={85} height={70} className={styles.logo} /></a>
        <nav className={styles.nav}>
          <a href="#whyUs">About</a>
          <a href="#contact">Contact</a>
          
        </nav>
        <a href='#contact' className={`${styles.button1} ${styles.forPC}`}>Book now</a>
        <div
          className={`${styles.navIcon3} ${styles.forPh} ${navOpen ? styles.open : ''}`}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.phoneNav} ${navOpen ? styles.open : ''}`}>
        <a href="#whyUs" onClick={closeNav}>About</a>
        <a href="#contact" onClick={closeNav}>Contact</a>
        <a href='#contact' className={`${styles.button1}`} onClick={closeNav}>Book now</a>
      </div>
    </header>
  );
}
