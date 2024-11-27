import "@/app/assets/scss/Page/HomePage/main.scss";
import FirstSection from "./components/HomePage/FirstSection";
import HomeAbout from "./components/HomePage/HomeAbout";
import HomeProjects from "./components/HomePage/HomeProjects";
import Testimonials from "./components/HomePage/Testimonials";

export default function Home() {
  return (
    <>
      <FirstSection />
      <HomeAbout />
      <HomeProjects />
      <Testimonials />
    </>
  );
}
