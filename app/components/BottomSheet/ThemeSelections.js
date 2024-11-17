"use client"
import { useState } from 'react'
import ThemeAppearance from './ThemeAppearance';

export default function ThemeSelections() {
  
  return <div className="popover-container theme-selection">
    <ThemeAppearance />
    {/* <div className="theme-changer-wrapper">
      <small className='label'>Theme Selections</small>
      <ul className="them-changer-list">
        <li>Default Theme</li>
      </ul>
    </div> */}
  </div>;
}
