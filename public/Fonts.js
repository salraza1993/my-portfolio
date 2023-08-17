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

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--ubuntu',
})
const bebasNeue = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--bebas-neue',
})

export {
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
};
