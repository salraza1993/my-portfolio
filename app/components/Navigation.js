import Link from "next/link";
import CustomButton from "./elements/CustomButton";

export default function Navigation() {
  const menus = [
    { label: 'Home', path: './', activeState: true },
    { label: 'About', path: './about', activeState: false },
    { label: 'Works', path: './portfolio', activeState: false },
  ];
  return <ul className="header__nav__menu">
    {
      menus.map((menu, index) => {
        return <li className={`header__nav__menu__list ${menu.activeState && 'active'}`} key={index}>
          <Link
            href={menu.path}
            className={`header__nav__menu__list--link ${menu.activeState && 'active'}`}>
            {menu.label}
          </Link>
        </li>;
      })
    }
    <li className="header__nav__menu__list more-button-block">
      <span className="more-button">
        <i className="fa-solid fa-ellipsis-v"></i>
      </span>
      <div className="sub-menus"></div>
    </li>
  </ul>;
}
