import TypeScriptIcon from './elements/TypeScriptIcon';
import HtmlIcon from './elements/HtmlIcon';
import CssIcon from './elements/CssIcon';
import ScssIcon from './elements/ScssIcon';
import NextJsIcon from './elements/NextJsIcon';
import FigmaIcon from './elements/FigmaIcon';

export default function BuiltWith() {
  return <div className="built-width-container">
    <div className="content-container">
        <span className='text-blue'>this</span>
        <span className='text-dark'>.</span>
        <span className='text-primary'>website</span>
        <span className='text-dark'>.</span>
        <span className='text-function'>createdWith</span>
        <span className='text-function'>(</span>
        <span className='icon-emoji'>❤️</span>
        <span className='text-function'>)</span>
        <span className='text-dark'>.</span>
        <span className='text-function'>using</span>
        <span className='text-function'>(</span>
        <span className='text-array'>[</span>
        <span className='icon-nj icon'><FigmaIcon /></span>
        <span className='text-nj'>Figma</span>
        <span className='text-dark'>,</span>
        <span className='icon-nj icon'><NextJsIcon /></span>
        <span className='text-nj'>NextJs</span>
        <span className='icon-ts icon'><TypeScriptIcon /></span>
        <span className='text-ts'>TypeScript</span>
        <span className='text-dark'>,</span>
        <span className='icon-html icon'><HtmlIcon /></span>
        <span className='text-html'>Html5</span>
        <span className='text-dark'>,</span>
        <span className='icon-css icon'><CssIcon /></span>
        <span className='text-css'>Css3</span>
        <span className='text-dark'>,</span>
        <span className='icon-scss icon'><ScssIcon /></span>
        <span className='text-scss'>Scss</span>
        <span className='text-array'>]</span>
        <span className='text-function'>)</span>
    </div>
  </div>;
}
