import Link from "next/link";
import GridColumns from "./GridColumns";
import BuiltWith from "./BuiltWith";

export default function Footer() {
  const socialLinks = [
    { iconClass: 'linkedin-in', link: 'https://www.linkedin.com/in/salraza1993/'},
    { iconClass: 'github', link: 'https://github.com/salraza1993'},
    { iconClass: 'codepen', link: 'https://codepen.io/salmanraza'},
    { iconClass: 'behance', link: 'https://be.net/salraza1993'},
  ];
  return<>
    <footer className="footer">
      {/* <Link href={"https://wa.me/+971551532975"} target="_blank" className="cta-call-button"><i className="fa-brands fa-whatsapp"></i></Link> */}
      <div className="wrapper">
        <div className="footer__content">
          <div className="footer__content__block">
            <h1 className="__heading gilroy--ultraLight fs--xl">
              Let's stay <span className="gilroy--bold">connected </span>
              through <span className="gilroy--bold">digitally</span>
            </h1>
            <div className="social-links">
              <ul className="social-links__menus">
                {
                  socialLinks.map((item, index) => <li key={index} className="social-links__menus__item">
                    <Link href={item.link} className="social-links__menus__item--link" target="__blank">
                      <i className={`fa-brands fa-${item.iconClass}`}></i>
                    </Link>
                  </li>)
                }
              </ul>
            </div>
            <div className="footer-cta-buttons">
              <span className="__or">or</span>
              <Link href={'mailto:salraza1993@gmail.com'} className="footer-cta-buttons__button __email">
                <i className="fa-regular fa-envelope"></i>
                salraza1993@gmail.com
              </Link>
              <Link href={"https://wa.me/+971551532975"} target="__blank" className="footer-cta-buttons__button __whatsapp">
                Get quick response through
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </div>
        <BuiltWith />
        <GridColumns />
      </div>
    </footer>
  </> 
}
