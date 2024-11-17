"use client"
import { useState } from "react";

export default function TaskbarAlignment({ setCurrentPositionHandler, currentPosition }) {
  const [alignmentList, setAlignmentList] = useState(['left', 'center', 'right']);
  const clickedHandler = (event) => setCurrentPositionHandler(event);
  return <div className={`popover-container alignment alignment-${currentPosition}`}>
    <span className='strip-label'>Positioning</span>
    <ul className='positions'>
      {
        alignmentList.map((alignment, index) => (
          <li key={index}
            className={`positions__list ${alignment === currentPosition && 'active'}`}
            onClick={() => clickedHandler(alignment)}>
            {alignment}
          </li>
        ))
      }
      <li className={`active-strip ${currentPosition}`}></li>
    </ul>
  </div>;
}
