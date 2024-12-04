"use client";
import Link from 'next/link';
import '@/app/assets/scss/components/BottomSheet.scss';
import { useEffect, useRef, useState } from 'react';
import TaskbarAlignment from './TaskbarAlignment';
import useClickOutside from '@/app/Handlers/ClickOutsideHandler';
import { LocalStorageMainKey, useLocalStorage } from '@/app/Contexts/LocalStorageContext';
import ThemeSelections from './ThemeSelections';
import DownloadResume from './DownloadResume';
import DownloadArrow from '../elements/DownloadArrow';

export default function BottomSheet() {
  const { getItem, setItem } = useLocalStorage();
  const [taskbarPosition, setTaskbarPosition] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);
  const bottomSheetRef = useRef(null)

  const taskBarHandler = (newPosition) => {
    setItem("taskbarPosition", newPosition);
    setTaskbarPosition(newPosition);
  };

  const menuHandler = (event, value) => {
    // setSelectedMenu(value)
    // if (lastSelected == value) {
    //   setSelectedMenu(null);
    //   setLastSelected(null)
    // }
    // else
    // setLastSelected(value)
    // else setSelectedMenu(event)
    if (selectedMenu === value) setSelectedMenu(null);
    else setSelectedMenu(value)
  }

  useClickOutside(bottomSheetRef, () => setSelectedMenu(null));

  useEffect(() => {
    const position = getItem("taskbarPosition");
    if (position) setTaskbarPosition(position);
  }, [getItem]);

  return <div className={`bottom-sheet-wrapper content-align-${taskbarPosition}`}>
    <div className={`bottom-sheet-container content-align-${taskbarPosition}`} ref={bottomSheetRef}>
      <div className="inner-strip">
        <Link
          href={"https://wa.me/+971551532975"}
          target="_blank"
          className="whatsapp-button">
          <i className="fa-brands fa-whatsapp"></i>
          <span>Let&#39;s Chat!</span>
        </Link>
      </div>
      <ul className="lists">
        <li className={`${selectedMenu === "theming" ? 'active' : ''}`}>
          <span className='popover-icon' onClick={(e) => menuHandler(e, 'theming')}>
            <i className="fa-solid fa-swatchbook"></i>
          </span>
          <ThemeSelections />
        </li>
        <li>
          <DownloadResume classes={"popover-icon my-resume"}>
            <DownloadArrow />
          </DownloadResume>
        </li>
        <li className={`${selectedMenu === "alignment" ? 'active' : ''}`}>
          <span className='popover-icon' onClick={(e) => menuHandler(e, 'alignment')}>
            <i className="fa-solid fa-ellipsis-v"></i>
          </span>
          {
            selectedMenu === "alignment" &&
            <TaskbarAlignment setCurrentPositionHandler={taskBarHandler} currentPosition={taskbarPosition} />
          }
        </li>
      </ul>
    </div>
  </div>
}

