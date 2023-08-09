import {
  roboto,
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

export const metadata = {
  title: 'Salman Raza | UX/UI Designer & Developer',
  description: 'Descriptions',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
          ${roboto.variable}
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
        <Header />
        {children}
      </body>
    </html>
  )
}
