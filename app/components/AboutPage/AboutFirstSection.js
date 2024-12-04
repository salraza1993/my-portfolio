import Image from 'next/image';
import GridColumns from '../GridColumns';
import SectionHeading from '../SectionHeading';
import DownloadArrow from '../elements/DownloadArrow';
import PdfIcon from '../elements/PdfIcon';

export default function AboutFirstSection() {
  return (
    <section className="about-first-section">
      <div className="backdrop">
        <span className="gradient-strip"></span>
      </div>
      <div className="wrapper">
        <div className="sub-section">
          <SectionHeading
            smallHeading={'about me'}
            buttonPath={false}
            bigOutlineHeading={"Let's get to know"}
            bigHeading={'Each Other'}
            iconImage={false}
            iconImageAlt={false}
            noPadding
          />
          <a 
            href="/files/Salman_Resume.pdf"
            download="Salman_Raza_Resume.pdf"
            type=".pdf"
            className='cta-button no-padding-left'>
            <span className='cta-button__icon __before'>
              <PdfIcon />
            </span>
            <span>My Resume</span>
            <span className='cta-button__icon __after'>
              <DownloadArrow />
            </span>
          </a>
          <div className="my-profile-image">
            <Image src={"/images/profile-image.png"} alt={'My Image'} fill priority  />
          </div>
        </div>
      </div>
      <GridColumns />
    </section>
  )
}
