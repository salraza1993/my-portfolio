import {
  ubuntu,
  inter,
  bebasNeue,
  courierPrime,
  gilroy,
  gilroyThin,
  gilroyUltraLight,
  gilroyLight,
  gilroyRegular,
  gilroyMedium,
  gilroySemiBold,
  gilroyBold,
} from "./../public/Fonts";

import '/node_modules/@fortawesome/fontawesome-free/css/all.css';
import './assets/scss/style.scss'
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrimaryLoader from "./components/PrimaryLoader";
import { Suspense } from "react";
import BottomSheet from "./components/BottomSheet/BottomSheet";
import { LocalStorageProvider } from "./Contexts/LocalStorageContext";

export const metadata = {
  title: 'Salman Raza | UX/UI Designer & Developer',
  description: 'Descriptions',
}

export default function RootLayout({ children }) {
  const bodyFonts = [
    ubuntu.variable, 
    inter.variable, 
    courierPrime.variable,
    bebasNeue.variable, 
    gilroy.variable, 
    gilroyThin.variable, 
    gilroyUltraLight.variable, 
    gilroyLight.variable, 
    gilroyRegular.variable, 
    gilroyMedium.variable, 
    gilroySemiBold.variable, 
    gilroyBold.variable].join(' ');
  return (
    <html lang="en">
      <body className={bodyFonts}>
        <Header />
        {children}
        <Footer />
        <LocalStorageProvider>
          <BottomSheet />
        </LocalStorageProvider>
        {/* <Suspense fallback={'<PrimaryLoader />'}></Suspense> */}
      </body>
    </html>
  )
}
