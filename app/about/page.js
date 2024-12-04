import GridColumns from '../components/GridColumns';
import AboutFirstSection from '../components/AboutPage/AboutFirstSection';
import '@/app/assets/scss/Page/AboutPage/main.scss';
import AboutSecondSection from '../components/AboutPage/AboutSecondSection';
import SkillSection from '../components/AboutPage/SkillSection';
import BornBroughtUp from '../components/AboutPage/BornBroughtUp';

export default function About() {
  return (
    <>
      <AboutFirstSection />
      <AboutSecondSection />
      <SkillSection />
      <BornBroughtUp />
    </>
  )
}
