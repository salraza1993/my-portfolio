"use client"
import Link from 'next/link';
import SR_logo from './elements/SR_logo';
import GridColumns from './GridColumns';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';
import ArrowRight from './elements/ArrowRight';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <header className={scrolled ? 'header sticked' : 'header'}>
    <div className="wrapper display--flex justify-content--between">
      <div className="header__block">
        <Link href={'./'} className="header__logo">
          <span className="header__logo__svg">
            <SR_logo />
          </span>
          <span className='header__logo__text'>Salman Raza</span>
        </Link>      
      </div>
      <div className="header__block">
        <nav className="header__nav">
          <div className='display--flex align_items--center gap--3'>
            <Navigation />
            <Link href={'./'} className="contact-button">
              <span className='text'>Contact Me</span>
              <span className="icon"><ArrowRight /></span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
    <GridColumns />
    <div className="header-blur-strip"></div>
  </header>
}
