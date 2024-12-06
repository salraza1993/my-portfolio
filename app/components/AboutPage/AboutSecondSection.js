import GridColumns from '../GridColumns';
import Image from 'next/image';
import HomeAboutSRLogo from '../elements/HomeAboutSRLogo';
import { CurrentCompany, DubaiTooltipCardDetails } from '@/app/common/TooltipsData';
import TooltipCard from '../../common/TooltipCard';
import { myInfo } from '@/app/common/CommonContent';

export default function AboutSecondSection() {
  
  return (
    <section className='second-section'>
      <div className="wrapper">
        <div className='content'>
          <div className="content__logo hidden--xl">
            <HomeAboutSRLogo />
          </div>
          <span className='hello-text gilroy--bold'>hello!</span>
          <p className='heading--small'>Myself,</p>
          <h2 className='gilroy--bold text-primary font-size--h1'>{myInfo.name}</h2>
          <p>
            I am an Indian {myInfo.frontend} & {myInfo.designer} currently residing in <span className="tooltip-container">
              <strong className='tooltip-text'>Dubai</strong>
              <TooltipCard data={DubaiTooltipCardDetails} />
            </span>, United Arab Emirates. With a passion for crafting creative designs and developing engaging websites and mobile applications, I thrive on bringing ideas to life through technology and aesthetics.
          </p>
          <p>
            By day, I serve as a <strong>Senior {myInfo.frontend} & {myInfo.designer}</strong> at <span className='currentCompany tooltip-container'>
              <strong className='tooltip-text'>{CurrentCompany.name}</strong>
              <TooltipCard data={CurrentCompany} />
            </span> in Dubai, where I dedicate my expertise to delivering innovative and user-focused digital solutions.
          </p>
          <span className='man-sitting-on-couch'>
            <Image src={'/images/man-on-bean-bag.png'} alt={"Man Sitting on couch"} fill priority />
          </span>
        </div>
        <div className="sub-content-wrapper">
          <div className="sub-content">
            <p>
              Over the years, I have evolved from a <strong>{myInfo.graphic}</strong> to a skilled Web, {myInfo.designer}, and <strong>{myInfo.frontend}</strong>. I specialize in crafting visually compelling designs, developing <strong>responsive layouts</strong>, and building SEO-friendly websites.
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