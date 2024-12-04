import Image from "next/image";

export default function CurrentCompanyDetailsCard({data}) {
  return (
    <span className='tooltip-data company-details'>
      <span className="company-details-card">
        <span className="company-details-card__header">
          <span className="__logo">
            <Image src={data.logo || ""} alt={data.name || ""} width={100} height={50} />
          </span>
          <span className="__banner">
            <Image src={data.headerBanner || ""} alt={data.name || ""} fill priority />
          </span>
          <a href={data.url} target='_blank' className="__link">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </span>
        <span className="company-details-card__body">
          <span dangerouslySetInnerHTML={{ __html: data.description }}></span>
        </span>
      </span>
    </span>
  )
}
