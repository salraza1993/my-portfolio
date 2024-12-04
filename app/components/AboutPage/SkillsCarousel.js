'use client'

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AngularIcon from "../elements/AngularIcon";
import ReactJsIcon from "../elements/ReactJsIcon";
import NextJsIcon from "../elements/NextJsIcon";
import VueJsIcon from "../elements/VueJsIcon";
import CssIcon from "../elements/CssIcon";
import HtmlIcon from "../elements/HtmlIcon";
import FigmaIcon from "../elements/FigmaIcon";
import PhotoshopIcon from "../elements/PhotoshopIcon";
import IllustratorIcon from "../elements/IllustratorIcon";
import JsIcon from "../elements/JsIcon";
import TypeScriptIcon from "../elements/TypeScriptIcon";
import ScssIcon from "../elements/ScssIcon";
import ReduxIcon from "../elements/ReduxIcon";
import WordpressIcon from "../elements/WordpressIcon";
import SketchIcon from "../elements/SketchIcon";
import JQueryIcon from "../elements/JQueryIcon";
import GithubIcon from "../elements/GithubIcon";
import FirebaseIcon from "../elements/FirebaseIcon";
import NuxtJsIcon from "../elements/NuxtJsIcon";
import XdIcon from "../elements/XdIcon";
import { Autoplay, FreeMode } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/free-mode';

export default function SkillsCarousel() {
  const initialIcons = [
    { icon: <AngularIcon />, label: 'Angular', className: 'angular' },
    { icon: <ReactJsIcon />, label: 'React.js', className: 'react' },
    { icon: <NextJsIcon />, label: 'Next.js', className: 'nextjs' },
    { icon: <PhotoshopIcon />, label: 'Photoshop', className: 'photoshop' },
    { icon: <VueJsIcon />, label: 'Vue.js', className: 'vue' },
    { icon: <CssIcon />, label: 'CSS', className: 'css' },
    { icon: <FigmaIcon />, label: 'Figma', className: 'figma' },
    { icon: <IllustratorIcon />, label: 'Illustrator', className: 'illustrator' },
    { icon: <JsIcon />, label: 'JavaScript', className: 'javaScript' },
    { icon: <HtmlIcon />, label: 'HTML', className: 'html' },
    { icon: <TypeScriptIcon />, label: 'TypeScript', className: 'typeScript' },
    { icon: <ReduxIcon />, label: 'Redux', className: 'redux' },
    { icon: <WordpressIcon />, label: 'WordPress', className: 'wordPress' },
    { icon: <SketchIcon />, label: 'Sketch', className: 'sketch' },
    { icon: <JQueryIcon />, label: 'jQuery', className: 'jQuery' },
    { icon: <ScssIcon />, label: 'SASS', className: 'scss' },
    { icon: <GithubIcon />, label: 'GitHub', className: 'gitHub' },
    { icon: <FirebaseIcon />, label: 'Firebase', className: 'firebase' },
    { icon: <NuxtJsIcon />, label: 'Nuxt.js', className: 'nuxt' },
    { icon: <XdIcon />, label: 'Experience Design (Xd)', className: 'xd' },
  ];
  const [icons, setIcons] = useState(initialIcons);
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={25}
      freeMode={true}
      speed={6500}
      loop={true}
      modules={[FreeMode, Autoplay]}
      autoplay={{ delay: 0 }}
      className="icons-grid"
    >
      {
        icons.map((card, index) => <SwiperSlide key={index}
          className={`icons-grid__list ${card.className}`} style={{ "--gradient-delay": index / 75 * index }}>
          <div className="__content">
            <span className="icon">{card.icon}</span>
            <span className="label">{card.label}</span>
          </div>
        </SwiperSlide>)
      }
    </Swiper>
  )
}
