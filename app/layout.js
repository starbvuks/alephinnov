import "./globals.css";
import CustomFont from 'next/font/local';

export const metadata = {
  title: "Aleph Innovation",
  description: "Build & Accelerate Your Digital Business",
};

const apercu = CustomFont({
  src: [
    {
      path: "../public/fonts/Apercu/Apercu Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/Apercu/Apercu Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Apercu/Apercu Medium.otf",
      weight: "500",
      style: "regular",
    },
    {
      path: "../public/fonts/Apercu/Apercu Bold.otf",
      weight: "700",
      variable: "bold",
    },
  ],
  variable: "--apercu",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${apercu.variable}`}>{children}</body>
    </html>
  );
}
