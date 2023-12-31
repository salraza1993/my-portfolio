'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import CustomCursor from "../CustomCursor";

export default function DesignerLetters() {
  const [isShow, setIsShow] = useState(true);
  return <>
    <Link href={'./designer'} className="__designer customCursor">
      {/* <CustomCursor  /> */}
      <span className="extra-letters">UX/UI, Website & Graphic</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="728.137" height="191.065" viewBox="0 0 728.137 191.065">
        <g id="designer" transform="translate(1.5 1.5)">
          <path id="r" d="M701.156,102.41l-.15-.54a58.72,58.72,0,0,0,8.78-6.26.01.01,0,0,1,.01-.01,38.908,38.908,0,0,0,6.54-9.25,50.063,50.063,0,0,0,4.15-19.3V44.7q0-20.355-11.71-32.53Q697.526.47,678.8,0h-44.75V187.45h27.6V107.6h14.32l20.05,79.85h28.65ZM692.9,63.32c0,.17,0,.34-.01.51v.81a15.816,15.816,0,0,1-.61,4.38c-.03.14-.07.27-.11.4a14.366,14.366,0,0,1-11.93,10.94,16.258,16.258,0,0,1-3.44.37h-15.15V26.76h14.32q8.07-.015,12.5,4.55a15.308,15.308,0,0,1,3.9,7.56c0,.02.01.03.01.05a16.161,16.161,0,0,1,.51,4.02v.72c.01.17.01.34.01.51Z" fill="currentColor" className="current--color" stroke="#707070" strokeWidth="3" />
          <path id="e" d="M543.18,0V188.063h78.372V161.2H570.78V107.468h40.358V80.6H570.78V26.865h50.772V0Z" fill="currentColor" className="current--color" stroke="#707070" strokeWidth="3" />
          <path id="n" d="M503.6,126.271,468.455,0H437.991V188.06h27.077V67.7L501.52,188.063h29.166V0H503.6Z" fill="currentColor" className="current--color" stroke="#707070" strokeWidth="3" />
          <path id="g" d="M381.413,0q-19.789,0-32.026,12.107t-12.237,31.9v99.459q0,19.792,12.237,31.9t32.026,12.107q19.787.012,32.025-12.1t12.238-31.9V80.6H381.413v26.873h16.663v36q0,8.592-4.426,13.279t-12.237,4.687q-7.811,0-12.237-4.686t-4.426-13.279V44.011q0-8.592,4.426-13.279t12.238-4.687q7.811,0,12.237,4.687t4.426,13.279V53l27.6,0V44.007q0-19.792-12.238-31.9T381.413,0" fill="currentColor" className="current--color" stroke="#707070" strokeWidth="3" />
          <rect id="i" width="27.6" height="188.062" transform="translate(296.956 0.003)" fill="currentColor" className="current--color" stroke="#707070" strokeWidth="3" />
          <path id="s" d="M249.419,83.053Q234.574,68.176,229.369,60.2c-.15-.211-.29-.432-.43-.652a29.787,29.787,0,0,1-4.77-15.931c-.01-5.748,1.3-10.1,3.9-13.061s6.34-4.444,11.2-4.444,8.593,1.828,11.2,5.487,3.91,8.969,3.91,15.931v5.464h26.56V45.179q-.01-20.635-11.2-32.9T239.009,0q-19.52-.007-30.72,12.145t-11.2,32.783a54.693,54.693,0,0,0,7.42,27.949q7.42,12.8,27.73,32.121,15.095,14.361,20.18,22.461a31.6,31.6,0,0,1,5.08,16.984q0,8.091-4.82,12.791t-12.89,4.7q-8.33-.011-13.02-5.748t-4.69-15.669v-5.452h-26.55v8.068a47.422,47.422,0,0,0,5.6,23.243,40.16,40.16,0,0,0,15.75,15.931,49.593,49.593,0,0,0,46.35,0,40.264,40.264,0,0,0,15.74-15.931,47.422,47.422,0,0,0,5.6-23.243v0a52.119,52.119,0,0,0-7.42-27.3q-7.42-12.409-27.73-32.784" fill="currentColor" className="current--color" stroke="#707070" strokeWidth="3" />
          <path id="e-2" data-name="e" d="M104.663,188.063h78.372V161.2H132.263V107.468h40.358V80.6H132.263V26.865h50.772V0H104.663Z" fill="currentColor" className="current--color" stroke="#707070" strokeWidth="3" />
          <path id="d" d="M48.968.021H0V188.063H27.57V162.241h.03V26.441H47.668q8.07,0,12.5,4.487t4.42,12.682l-.017,144.453H92.188V44.138q0-20.07-11.72-32.093T48.968.021" fill="currentColor" className="current--color" stroke="#707070" strokeWidth="3" />
        </g>
      </svg>
    </Link>
  </>
}
