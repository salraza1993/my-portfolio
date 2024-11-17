import DesignerLetters from "../elements/DesignerLetters";
import DeveloperLetters from "../elements/DeveloperLetters";
import PlusSymbol from "../elements/PlusSymbol";
import GridColumns from "../GridColumns";

export default function FirstSection() {
  return <section className="first-section">
    <div className="backdrop"></div>
    <div className="wrapper">
      <div className="sub-section">
        <div className="sub-section__block">
          <h3 className="m--0 display--flex align-items--center flex--wrap gap--2">
            <span className="me--2"><img src="/images/hello.png" alt="" /></span>
            <span className="gilroy--ultraLight">Hello there, I'm </span>
            <span className="gilroy--bold">Salman Raza</span>
          </h3>
          <div className="design-dev-letters">
            <DesignerLetters />
            <DeveloperLetters />
            <PlusSymbol />
            <span className="lines"></span>
          </div>
          <h4>
            currently based in <span className="gilroy--bold">Dubai</span>, United Arab Emirates
          </h4>
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
  </section>;
}
