'use client';
import { useState, useEffect } from "react";

function CustomCursor({ itemClass = 'customCursor' }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
    const target = e.target;
    setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");
  };

  useEffect(() => {
    const cursorItem = document.querySelector(`.${itemClass}`);
    const addHoverEffect = (e) => {
      const currentItemParent = e.target.parentNode;
      currentItemParent?.classList.add('hello');
    };
    const removeHoverEffect = (e) => {
      const currentItemParent = e.target.parentNode;
      currentItemParent?.classList.remove('hello');
    };

    if (cursorItem) {
      cursorItem.addEventListener('mouseover', addHoverEffect);
      cursorItem.addEventListener('mouseout', removeHoverEffect);
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (cursorItem) {
        cursorItem.removeEventListener('mouseover', addHoverEffect);
        cursorItem.removeEventListener('mouseout', removeHoverEffect);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [itemClass]); // Add itemClass to the dependency array

  const flareSize = isPointer ? 0 : 30;
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <>
      <div
        className={`cursor-flare ${isPointer ? "pointer" : ""}`}
        style={{
          ...cursorStyle,
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${flareSize}px`,
          height: `${flareSize}px`,
        }}
      ></div>
    </>
  );
}

export default CustomCursor;
