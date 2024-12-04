import Image from "next/image";

export default function UaeTooltipData() {
  return (
    <span className='tooltip-data company-details'>
      <span className="company-details-card">
        <span className="company-details-card__header">
          {/* <span className="__logo">
            <Image src={data.logo || ""} alt={data.name || ""} width={100} height={50} />
          </span> */}
          <span className="__banner">
            <Image src={"/images/burj-khalifa-image.png"} alt={"UAE Banner"} fill priority />
          </span>
          <a href={"https://en.wikipedia.org/wiki/Dubai"} target='_blank' className="__link">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </span>
        <span className="company-details-card__body">
          Dubai is the most populous city in the United Arab Emirates and the capital of the Emirate of Dubai, the most populated of the country&#39;s seven emirates. The city has a population of around 3.79 million (as of 2024), more than 90% of which are expatriates.
        </span>
      </span>
    </span>
  )
}
