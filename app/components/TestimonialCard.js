import quoteIcon from '/public/images/quote_icon.png'
import profilePlaceHolder from '/public/images/male-placeholder-image.jpeg'
import Image from 'next/image';

export default function TestimonialCard({data}) {
  return <div className="testimonial-cards__card">
    <div className="quote-icon">
      <Image src={quoteIcon} alt="Author Image" />
    </div>
    <h4 className="gilroy--semiBold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi suscipit magnam veritatis dignissimos minima.
    </h4>
    <div className="author-profile">
      <div className="author-profile__image">
        <Image src={profilePlaceHolder} fill={true} alt="Author Image" />
      </div>
      <div className="author-profile__text">
        <h6 className="m--0 gilroy--bold">Hasan Tariq</h6>
        <small className="ubuntu--medium"><span>General Manager</span> | <span>GM, NSAS Tourism LLC</span></small>
      </div>
    </div>
  </div>;
}
