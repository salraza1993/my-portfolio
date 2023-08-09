import Link from 'next/link';
import SR_logo from './elements/SR_logo';
import ArrowRight from './elements/ArrowRight';
import HamburgerIcon from './elements/HamburgerIcon';
import GridColumns from './GridColumns';

export default function Header() {
  const menus = [
    { label: 'Home', path: './', activeState: true },
    { label: 'About', path: './about', activeState: false },
    { label: 'Works', path: './portfolio', activeState: false },
  ];
  return <header className='header'>
    <div className="wrapper display--flex justify__content--between">
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
          <div className='display--flex align_items--center gap--2'>
            <ul className="header__nav__menu">
              {
                menus.map((menu, index) => {
                  return <li className='header__nav__menu__list'>
                    <Link
                      href={menu.path}
                      className={`header__nav__menu__list--link ${menu.activeState && 'active'}`}>
                      {menu.label}
                    </Link>
                  </li>
                })
              }
            </ul>
            <div className="hamburger-menus">
              <HamburgerIcon />
            </div>
          </div>
          <Link href={'/contact'} className='cta-button'>
            Contact Me
            <span className='cta-button__icon'><ArrowRight /></span>
          </Link>
        </nav>
      </div>
    </div>
    <GridColumns />
  </header>
}
