import React from 'react'
import GridColumns from '../GridColumns';
import Image from 'next/image';
import CurrentCompanyDetailsCard from './CurrentCompanyDetailsCard';
import HomeAboutSRLogo from '../elements/HomeAboutSRLogo';

export default function AboutSecondSection() {
  const currentCompany = {
    name: "NSAS Tourism L.L.C",
    logo: '/images/nsas-logo.svg',
    headerBanner: '/images/burj-khalifa-image.png',
    description: '<strong>NSAS Tourism</strong> provides comprehensive travel services, including bookings, visas, and insurance, with a focus on sustainability and tailored experiences for diverse clients.',
    url: 'https://nsas-tourism.com/',
  }
  return (
    <section className='second-section'>
      <div className="wrapper">
        <div className='content'>
          <div className="content__logo hidden--xl">
            <HomeAboutSRLogo />
          </div>
          <span className='hello-text gilroy--bold'>hello!</span>
          <p className='heading--small'>Myself,</p>
          <h2 className='gilroy--bold text-primary font-size--h1'>Salman Raza</h2>
          <p>
            I am an Indian UX/UI Designer and Front-end Developer currently residing in Dubai, United Arab Emirates. With a passion for crafting creative designs and developing engaging websites and mobile applications, I thrive on bringing ideas to life through technology and aesthetics.
          </p>
          <p>
            By day, I serve as a <strong>Senior Front-end Developer & UX/UI Designer</strong> at <span className='currentCompany tooltip-container'>
              <strong className='tooltip-text'>{currentCompany.name}</strong>
              <CurrentCompanyDetailsCard data={currentCompany} />
            </span> in Dubai, where I dedicate my expertise to delivering innovative and user-focused digital solutions.
          </p>
          <span className='man-sitting-on-couch'>
            <Image src={'/images/man-on-bean-bag.png'} alt={"Man Sitting on couch"} fill priority />
          </span>
        </div>
        <div className="sub-content-wrapper">
          <div className="sub-content">
            <p>
              Over the years, I have evolved from a <strong>Graphic Designer</strong> to a skilled Web, UX/UI Designer, and <strong>Front-end Developer</strong>. I specialize in crafting visually compelling designs, developing <strong>responsive layouts</strong>, and building SEO-friendly websites.
            </p>
            <p>
              My work bridges <strong>creativity</strong> and functionality, empowering developers and designers to deliver exceptional digital experiences.
            </p>
          </div>
          <div className="sub-content__icon">
            <Image src={'/images/clapping-icon.png'} alt={"Clapping Hand"} fill priority />
          </div>
        </div>
      </div>
      <br />
      <GridColumns />
    </section>
  )
}