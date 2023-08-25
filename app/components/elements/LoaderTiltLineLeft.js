import React from 'react'

export default function LoaderTiltLineLeft() {
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" width="509.331" height="1080.331" viewBox="0 0 509.331 1080.331">
      <line id="v-tilt-line-left" x2="508" y2="1079" transform="translate(0.665 0.665)" fill="none" stroke="#fff"  strokeMiterlimit="1" strokeWidth="1" strokeDasharray="6 6" />
    </svg>
    <animate
      attributeName="stroke-dashoffset"
      values="100;0"
      dur="3s"
      calcMode="linear"
      repeatCount="indefinite" />
  </>
}
