'use client'
import { useState, useEffect } from "react";

function CustomCursor({ itemClass = 'customCursor' }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const handleMouseMove = (e) => {
    // setPosition({ x: e.clientX, y: e.clientY });
    setPosition({ x: e.pageX, y: e.pageY });
    const target = e.target;
    console.log(window.getComputedStyle(target).getPropertyValue("cursor"));
    setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");
  };
  useEffect(() => {
    const cursorItem = document.querySelector(`.${itemClass}`);
    cursorItem.addEventListener('mouseover', (e) => {
      const currentItemParent = e.target.parentNode;
      currentItemParent.classList.add('hello');
    });
    cursorItem.addEventListener('mouseout', (e) => {
      const currentItemParent = e.target.parentNode;
      currentItemParent.classList.remove('hello');
    })
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      // window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const flareSize = isPointer ? 0 : 30;
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};
  return (
    <> {
      <div
        className={`cursor-flare ${isPointer ? "pointer" : ""}`}
        style={{
          ...cursorStyle,
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${flareSize}px`,
          height: `${flareSize}px`,
        }}
      ></div>}
    </>
  );
}
export default CustomCursor;

// function CustomCursor() {
//   useEffect(() => {
//     let mouseCursor = document.querySelector('.mouseCursor');
//     function cursor(e) {
//       mouseCursor.style.top = e.pageY + 'px';
//       mouseCursor.style.left = e.pageX + 'px';
//     }
//     window.addEventListener('mousemove', cursor);
//     return () => { };
//   }, []);
//   return (
//     <div class="mouseCursor"></div>
//   );
// }

// export default CustomCursor;