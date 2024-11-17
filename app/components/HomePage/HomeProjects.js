import Link from "next/link";
import SectionHeading from "../SectionHeading";
import ArrowRight from "../elements/ArrowRight";
import ProjectSlider from "../ProjectSlider";
import GridColumns from "../GridColumns";

export default function HomeProjects() {
  const galleryTabs = [
    { label: 'Websites', iconName: 'icon-website', path: '/' },
    { label: 'Applications', iconName: 'icon-application', path: '/' },
    { label: 'Graphics', iconName: 'icon-graphic', path: '/' },
  ];
  return <section className="home-projects-sec">
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
                    <span className="arrow-icon"><ArrowRight /></span>
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
  </section>;
}
