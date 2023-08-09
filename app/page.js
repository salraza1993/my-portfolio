import Link from "next/link";
import GridColumns from "./components/GridColumns";
import DesignerLetters from "./components/elements/DesignerLetters";
import DeveloperLetters from "./components/elements/DeveloperLetters";
import Pencil from "./components/elements/Pencil";

export default function Home() {
  return (
    <>
      <section className="first-section">
        <div className="wrapper">
          <div className="sub-section">
            <div className="sub-section__block">
              <h3>
                <span className="hand-wave-icon me--2 font-size--h2">👋</span>
                <span className="gilroy--ultraLight">Hello there, I'm </span>
                <span className="gilroy--bold">Salman Raza</span>
              </h3>
              <div className="design-dev-letters">
                <div className="__designer">
                  <DesignerLetters />
                </div>
                <div className="__pencil">
                  <Pencil />
                </div>
                <div className="__developer">
                  <DeveloperLetters />
                </div>
              </div>
              <h3 className="gilroy--ultraLight">
                based in <span className="gilroy--bold">Dubai</span>, United Arab Emirates
              </h3>
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
      <Link href={"https://wa.me/+971551532975"} target="_blank" className="cta-call-button"><i className="fa-brands fa-whatsapp"></i></Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
