import localFont from 'next/font/local';
import { Ubuntu } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';

// =========== [ Gilroy ] =========== //
const gilroyThin = localFont({
  src: './fonts/Gilroy-Thin.woff2',
  variable: '--gilroy--thin',
});
const gilroyUltraLight = localFont({
  src: './fonts/Gilroy-UltraLight.woff2',
  variable: '--gilroy--ultraLight',
});
const gilroyLight = localFont({
  src: './fonts/Gilroy-Light.woff2',
  variable: '--gilroy--light',
});
const gilroyRegular = localFont({
  src: './fonts/Gilroy-Regular.woff2',
  variable: '--gilroy--regular',
});
const gilroy = localFont({
  src: './fonts/Gilroy-Regular.woff2',
  variable: '--gilroy',
});
const gilroyMedium = localFont({
  src: './fonts/Gilroy-Medium.woff2',
  variable: '--gilroy--medium',
});
const gilroySemiBold = localFont({
  src: './fonts/Gilroy-SemiBold.woff2',
  variable: '--gilroy--semiBold',
});
const gilroyBold = localFont({
  src: './fonts/Gilroy-Bold.woff2',
  variable: '--gilroy--bold',
});

const bebasNeueThin = localFont({
  src: './fonts/bebas/bebasneue_thin.woff2',
  variable: '--bebasneue--thin',
});
const bebasNeueLight = localFont({
  src: './fonts/bebas/bebasneue_light.woff2',
  variable: '--bebasneue--light',
});
const bebasNeue = localFont({
  src: './fonts/bebas/bebasneue.woff2',
  variable: '--bebasneue',
});
const bebasNeueBook = localFont({
  src: './fonts/bebas/bebasneue_book.woff2',
  variable: '--bebasneue--book',
});
const bebasNeueRegular = localFont({
  src: './fonts/bebas/bebasneue_regular.woff2',
  variable: '--bebasneue--regular',
});
const bebasNeueBold = localFont({
  src: './fonts/bebas/bebasneue_bold.woff2',
  variable: '--bebasneue--bold',

});


const roboto = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--roboto',
})
const bebas_Neue = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--g-bebas-neue',
})

export {
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
  bebasNeueRegular,
  bebasNeueBold,
  bebasNeueBook
};
