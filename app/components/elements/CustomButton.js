import Link from "next/link";
import ArrowRight from "./ArrowRight";

export default function CustomButton({
  inline = '',
  primary = '',
  size = '',
  primaryOutline = '',
  path = '#',
  classes = '',
  text = 'Button Text',
  icon = <ArrowRight />
}) {
  return <Link
    href={path}
    className={`cta-button ${size === 'large' ? 'cta-button--large' : ''} ${inline && 'cta-button--inline'} ${primary && 'cta-button--primary'} ${primaryOutline && 'cta-button--primary-outline'} ${classes}`}
  >
    {text}
    <span className='cta-button__icon'>{ icon }</span>
  </Link>;
}
