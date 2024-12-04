import Image from "next/image";
import IndiaMap from "../elements/IndiaMap";
import GridColumns from "../GridColumns";
import UaeTooltipData from "./UaeTooltipData";

export default function BornBroughtUp() {
  return <section className='got-born-section'>
    <div className="wrapper">
      <div className="got-born-section__content">
        <div className="text-block">
          <div className="flag">
            <Image src={"/images/india-flag.png"} alt={"India Flag"} fill priority />
          </div>
          <h2 className="font-size--xl gilroy--bold">Born and <span className="text-primary">Brought up</span></h2>
          <p>
            I was born in <strong>Bihar</strong>, a state in eastern <strong>India</strong>, and grew up in <strong>Delhi</strong>, the vibrant capital of <strong>India</strong>. My time in Delhi shaped my personality, giving me exposure to diverse cultures and the ability to adapt to dynamic environments.
          </p>
          <p>
            In 2018, I took a significant step by relocating from <strong>Delhi</strong> to <span className="tooltip-container">
              <strong className='tooltip-text'>Dubai, UAE</strong>
              <UaeTooltipData />
            </span>. This move marked the start of my professional career and opened up new opportunities for personal and professional growth.
          </p>
        </div>
        <div className="india-map-container">
          <div className="india-map">
            <span className="country-name">India</span>
            <IndiaMap />
            <div className="highlighter-container">
              <span className="start"></span>
              <span className="connecting-strip"></span>
              <span className="end"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GridColumns />
  </section>
}
