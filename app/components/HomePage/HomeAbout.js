import Image from "next/image";
import CustomButton from "../elements/CustomButton";
import HomeAboutSRLogo from "../elements/HomeAboutSRLogo";
import GridColumns from "../GridColumns";

export default function HomeAbout() {
  return <section className="home-about-sec">
    <div className="wrapper">
      <div className="home-about-sec__container">
        <span className="container-special-block"></span>
        <div className="sec-content">
          <div className="sec-content__logo hidden--xl">
            <HomeAboutSRLogo />
          </div>
          <div className="sec-content__text">
            <h5 className="mb--2 display--flex align-items--center gap--2">
              <span className=""><Image src={"/images/myself.gif"} alt="" width={60} height={60} /></span>
              <span>Myself</span>
            </h5>
            <h2 className="gilroy--bold fs--h2 __name">Salman Raza</h2>
            <div className="mb--4 pb--1">
              <p>
                I&#39;ve more than <strong>7 years</strong> experience as UX/UI Designer &amp; Front-end Developer.
              </p>
              <p>
                Currently I am based in <strong>Dubai, UAE</strong>, and working with <strong>NSAS Toursim L.L.C</strong> as Front-end Developer & UX/UI Designer.
              </p>
            </div>
            <CustomButton text='More About Me!' path="/about" inline primaryOutline classes="cta-button" />
          </div>
        </div>
        <div className="sec-profile">
          <Image src={"/images/profile-image.png"} alt="" className="display--block" fill priority />
        </div>
      </div>
    </div>
    <GridColumns />
  </section>;
}
