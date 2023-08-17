import Link from "next/link";
import GridColumns from "./components/GridColumns";
import DesignerLetters from "./components/elements/DesignerLetters";
import DeveloperLetters from "./components/elements/DeveloperLetters";
import Pencil from "./components/elements/Pencil";
import CustomButton from "./components/elements/CustomButton";
import HomeAboutSRLogo from "./components/elements/HomeAboutSRLogo";
import SectionHeading from "./components/SectionHeading";
import ProjectSlider from "./components/ProjectSlider";
import TestimonialCard from "./components/TestimonialCard";

export default function Home() {
  const currentCompany = 'NSAS Tourism L.L.C';
  const galleryTabs = [
    { label: 'Websites', iconName: 'icon-website', path: '/'},
    { label: 'Applications', iconName: 'icon-application', path: '/'},
    { label: 'Graphics', iconName: 'icon-graphic', path: '/'},
  ]
  return (
    <>
      <section className="first-section">
        <div className="backdrop"></div>
        <div className="wrapper">
          <div className="sub-section">
            <div className="sub-section__block">
              <h3 className="m--0">
                <span className="hand-wave-icon me--2 font-size--h2">👋</span>
                <span className="gilroy--ultraLight">Hello there, I'm </span>
                <span className="gilroy--bold">Salman Raza</span>
              </h3>
              <div className="design-dev-letters">
                <DesignerLetters />                
                <div className="__pencil">
                  <Pencil />
                </div>
                <Link href={"./developer"} className="__developer">
                  <span className="extra-letters">Website & Front-end</span>
                  <DeveloperLetters />
                </Link>
              </div>
              <h3 className="gilroy--ultraLight">
                based in <span className="gilroy--bold">Dubai</span>, United Arab Emirates
              </h3>
              <span className="scroll-to-bottom">Scroll to know more</span>
            </div>
            <div className="sub-section__block">
              <div className="first-section__image">
                <img src="/images/first-section-illustration.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <GridColumns />
      </section>
      <section className="home-projects-sec">
        <div className="wrapper">
          <div className="home-projects-sec__container">
            <SectionHeading
              smallHeading={'work'}
              buttonPath="#"
              bigOutlineHeading={'Case Studies &'}
              bigHeading={'Projects'}
              iconImage={'images/hand_puzzel.png'}
              iconImageAlt={'Puzzle Hand'}
            />
            <div className="category-tabs-container">
              <div className="category-tabs-container__illustration">
                <img src="/images/man-on-bean-bag.png" alt="Man on Bean Bag" />
              </div>
              <div className="category-tabs-container__content">
                <h4 className="mb--4 pb--3 gilroy--light">Have a sneak-peek into <strong>my body of work</strong> thus far...</h4>
                <ul className="category-tabs">
                  {
                    galleryTabs.map((tab, index) => <li key={index} className="category-tabs__tab">
                      <Link className="category-tabs__tab--link" href={tab.path}>
                        <span className="__icon">
                          <img src={`/images/${tab.iconName}.png`} alt="" />
                        </span>
                        {tab.label}
                      </Link>
                    </li>)
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="home-project-slider-container">
          <ProjectSlider />
        </div>
        <GridColumns />
      </section>
      <section className="home-about-sec">
        <div className="wrapper">
          <div className="home-about-sec__container">
            <span className="container-special-block"></span>
            <div className="sec-content">
              <div className="sec-content__logo">
                <HomeAboutSRLogo />
              </div>
              <div className="sec-content__text">
                <p className="mb--2">Myself</p>
                <h2 className="gilroy--bold fs--h2 __name">Salman Raza</h2>
                <div className="mb--4 pb--1">
                  <p>
                    I've more than <strong>7 years</strong> experience as UX/UI Designer &amp; Front-end Developer.
                  </p>
                  <p>
                    Currently I am based in <strong>Dubai, UAE</strong>, and working with <strong>NSAS Toursim L.L.C</strong> as Front-end Developer & UX/UI Designer.
                  </p>
                </div>
                <CustomButton text='More About Me!' path="/about" inline primaryOutline classes="cta-button--large" />
              </div>
            </div>
            <div className="sec-profile">
              <img src="/images/profile-image.png" alt="" />
            </div>
          </div>
        </div>
        <GridColumns />
      </section>
      <section className="home-testimonial-sec">
        <div className="wrapper">
          <div className="home-testimonial-sec__container">
            <SectionHeading
              smallHeading={'testimonials'}
              buttonPath="#"
              bigOutlineHeading={"People's views"}
              bigHeading={'About Me!'}
              iconImage={'images/hand-clapping.png'}
              iconImageAlt={'Puzzle Hand'}
            />
            <div className="testimonial-cards">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </div>
        </div>
        <GridColumns />
      </section>
    </>
  )
}
