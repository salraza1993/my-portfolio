import Link from 'next/link';
import SR_logo from './elements/SR_logo';
import HamburgerIcon from './elements/HamburgerIcon';
import GridColumns from './GridColumns';
import CustomButton from './elements/CustomButton';

export default function Header() {
  const menus = [
    { label: 'Home', path: './', activeState: true },
    { label: 'About', path: './about', activeState: false },
    { label: 'Works', path: './portfolio', activeState: false },
  ];
  return <header className='header'>
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
          <div className='display--flex align_items--center gap--2'>
            <ul className="h  eader__nav__menu">
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
          <CustomButton text='Contact Me' path="/contact" />
        </nav>
      </div>
    </div>
    <GridColumns />
  </header>
}
