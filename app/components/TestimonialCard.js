import Image from 'next/image';
import quoteIcon from '/public/images/quote_icon.png'
import profilePlaceHolder from '/public/images/male-placeholder-image.jpeg'

export default function TestimonialCard({ data }) {
  return <div className="testimonial-cards__card">
    <div className="mb--3">
      <div className="quote-icon mb--3">
        <Image src={quoteIcon} alt="Author Image" fill priority />
      </div>
      <h5 className="inter--semiBold line-height--normal">{data.comment}</h5>
    </div>
    <div className="author-profile">
      <div className="author-profile__image">
        <Image src={data.image || profilePlaceHolder} fill={true} alt="Author Image" />
      </div>
      <div className="author-profile__text">
        <h6 className="m--0 inter--bold">{data.name || 'Author Name'}</h6>
        <small><span>{data.designation || 'Position'}</span> | <span>{data.company || 'Company Name'}</span></small>
      </div>
    </div>
  </div>;
}
