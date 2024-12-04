"use client";
import GridColumns from '../GridColumns';
import Image from 'next/image';
import SkillsCarousel from './SkillsCarousel';

export default function SkillSection() {
  return <section className='skills-section'>
    <div className="wrapper">
      <div className="content-block">
        <div className="content-block__header">
          <div className="__illustration">
            <Image src={"/images/main-setting-on-chair.png"} alt={"Illustration"} fill priority />
          </div>
          <div className="__text">
            <h2 className='gilroy--bold text-primary'>Technical Expertise</h2>
            <p>
              A versatile skill set combining modern front-end frameworks with advanced design tools to deliver engaging, functional, and visually appealing web experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="icons-wrapper">
      <SkillsCarousel />
    </div>        
    <GridColumns />
  </section>
}
