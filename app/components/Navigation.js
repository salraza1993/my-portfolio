"use client";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [menus, setMenus] = useState([
    { label: 'Home', path: '/', isActive: true },
    { label: 'About', path: '/about', isActive: false },
    { label: 'Works', path: '/portfolio', isActive: false },
  ]);

  useEffect(() => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) => ({...menu, isActive: pathname === menu.path }))
    );
  }, [pathname]);

  return (
    <ul className="header__nav__menu">
      {menus.map((menu, index) => (
        <li className={`header__nav__menu__list ${menu.isActive ? 'active' : ''}`} key={index}>
          <Link href={menu.path} className={`header__nav__menu__list--link ${menu.isActive ? 'active' : ''}`}>
            {menu.label}
          </Link>
        </li>
      ))}
      <li className="header__nav__menu__list more-button-block">
        <span className="more-button">
          <i className="fa-solid fa-ellipsis-v"></i>
        </span>
        <div className="sub-menus"></div>
      </li>
    </ul>
  );
}
