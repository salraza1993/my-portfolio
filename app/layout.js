import {
  roboto,
  bebas_Neue,
  gilroy,
  gilroyThin,
  gilroyUltraLight,
  gilroyLight,
  gilroyRegular,
  gilroyMedium,
  gilroySemiBold,
  gilroyBold,
  bebasNeueThin,
  bebasNeueLight,
  bebasNeue,
  bebasNeueBook,
  bebasNeueRegular,
  bebasNeueBold,
} from "./../public/Fonts";

import './assets/scss/style.scss'
import 'fontawesome-free-v6/css/all.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Salman Raza | UX/UI Designer & Developer',
  description: 'Descriptions',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
          ${roboto.variable}
          ${bebas_Neue.variable}
          ${bebasNeueThin.variable}
          ${bebasNeueLight.variable}
          ${bebasNeue.variable}
          ${bebasNeueBook.variable}
          ${bebasNeueRegular.variable}
          ${bebasNeueBold.variable}
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
