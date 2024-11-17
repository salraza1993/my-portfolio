import { useLocalStorage } from '@/app/Contexts/LocalStorageContext';
import { useEffect, useState } from 'react'

export default function ThemeAppearance() {
  const { getItem, setItem } = useLocalStorage();
  const [themeMode, setThemeMode] = useState('auto');
  const [listMenu, setListMenu] = useState([
    { type: 'auto', label: 'OS Default', icon: 'desktop', selected: true },
    { type: 'dark', label: 'Dark Mode', icon: 'moon', selected: false },
    { type: 'light', label: 'Light Mode', icon: 'sun', selected: false },
  ]);

  const rootElementHandler = (theme) => {
    const rootElement = document.documentElement;
    if (rootElement) {
      rootElement.setAttribute('data-appearance', theme);
    }
  }

  const themeSetupHandler = (mode) => {
    setListMenu(listMenu.map((menuItem) =>
      menuItem.type === mode ? { ...menuItem, selected: true } : { ...menuItem, selected: false }
    ));
    setItem("appearanceMode", mode);
    setThemeMode(mode)
    rootElementHandler(mode);
  }

  useEffect(() => {
    const mode = getItem("appearanceMode");
    setListMenu(listMenu.map((menuItem) =>
      menuItem.type === mode ? { ...menuItem, selected: true } : { ...menuItem, selected: false }
    ));
    setThemeMode(mode)
    rootElementHandler(mode);
  }, [getItem]);

  return <div className="appearance-block">
    <small className='label'>Appearance</small>
    <ul className="appearance-list">
      {listMenu.map((item, index) => (
        <li
          key={index}
          onClick={() => themeSetupHandler(item.type)}
          className={`appearance-list__item ${item.selected ? 'active' : ''}`}>
          <i className={`fa-solid fa-${item.icon}`}></i>
          <span className="appearance-list__item--label">{item.label}</span>
        </li>
      ))}
      <li className={`active-strip ${themeMode}`}></li>
    </ul>
  </div>;
}
