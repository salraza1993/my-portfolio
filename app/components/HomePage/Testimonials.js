import GridColumns from "../GridColumns";
import SectionHeading from "../SectionHeading";
import TestimonialCard from "../TestimonialCard";

export default function Testimonials() {
  const testimonialCards = [
    { id: 'one', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing suscipit magnam veritatis dignissimos minima.', image: '/images/author-image.jpg', name: 'Hasan Tariq', designation: 'General Manager', company: 'NSAS Toursim LLC' },
    { id: 'two', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi suscipit magnam veritatis dignissimos minima.', image: '/images/author-image.jpg', name: 'Hasan Tariq', designation: 'General Manager', company: 'NSAS Toursim LLC' },
    { id: 'three', comment: 'Lorem ipsum dolor elit. Eius animi suscipit magnam veritatis dignissimos minima.', image: '/images/author-image.jpg', name: 'Hasan Tariq', designation: 'General Manager', company: 'NSAS Toursim LLC' }
  ];
  return <section className="home-testimonial-sec">
    <div className="wrapper">
      <div className="home-testimonial-sec__container">
        <SectionHeading
          smallHeading={'testimonials'}
          buttonPath="#"
          bigOutlineHeading={"People's views"}
          bigHeading={'About Me!'}
          iconImage={'images/hand-clapping.png'}
          iconImageAlt={'Puzzle Hand'}
        />
        <div className="testimonial-cards">
          {testimonialCards.map((card, index) => {
            return <TestimonialCard key={index} data={card} />;
          })}
        </div>
      </div>
    </div>
    <GridColumns />
  </section>;
}
