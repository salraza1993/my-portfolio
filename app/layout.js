import {
  ubuntu,
  bebasNeue,
  gilroy,
  gilroyThin,
  gilroyUltraLight,
  gilroyLight,
  gilroyRegular,
  gilroyMedium,
  gilroySemiBold,
  gilroyBold,
} from "./../public/Fonts";

import './assets/scss/style.scss'
import 'fontawesome-free-v6/css/all.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrimaryLoader from "./components/PrimaryLoader";

export const metadata = {
  title: 'Salman Raza | UX/UI Designer & Developer',
  description: 'Descriptions',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
          ${ubuntu.variable}
          ${bebasNeue.variable}
          ${gilroy.variable}
          ${gilroyThin.variable}
          ${gilroyUltraLight.variable}
          ${gilroyLight.variable}
          ${gilroyRegular.variable}
          ${gilroyMedium.variable}
          ${gilroySemiBold.variable}
          ${gilroyBold.variable}
        `}>
        {/* <FlareCursor /> */}
        <PrimaryLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
