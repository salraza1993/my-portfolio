import Image from "next/image";
import CustomButton from "./elements/CustomButton";

export default function SectionHeading({
  smallHeading = 'Small',
  buttonPath = '#',
  buttonText = 'Explore All',
  bigOutlineHeading = 'Outline text',
  bigHeading = 'Normal Text',
  iconImage = '/images/hand_puzzel.png',
  iconImageAlt = 'Image Name',
  noPadding = false,
}) {
  return <div className={`sec-heading-block ${noPadding && 'no-padding'}`}>
    <div className="sec-heading-block__top-strip">
      <h5 className="heading--small gilroy--bold">{smallHeading}</h5>
      { buttonPath  && <CustomButton text={buttonText} path={buttonPath} /> }
    </div>
    <h2 className="heading--big">
      <span className="__text">
        <span className="outline">{bigOutlineHeading}</span> <br /> {bigHeading}
      </span>
      {iconImage && <span className="__icon">
        <Image src={iconImage} alt={iconImageAlt} priority fill />
      </span>}
    </h2>
  </div>;
}
