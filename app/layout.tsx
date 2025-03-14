// app/layout.tsx

import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
import ScrollToTop from "./component/ScrollToTop";
import { CartProvider } from './component/CartContext';


// Metadata for the document head
export const metadata: Metadata = {
  title: "Boskery || HTML Template For Butcher & Meat",
  description: "Boskery is a modern butcher & meat shop HTML5 Template.",
};

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home One || Boskery || HTML Template For Butcher & Meat</title>
        <meta name="description" content="Boskery is a modern butcher & meat shop HTML5 Template." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />


        {/* Inline styles for jarallax */}
        <style type="text/css" id="jarallax-clip-0">
          {`#jarallax-container-0 {
            clip: rect(0 1348px 556px 0);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }`}
        </style>
        <style type="text/css" id="jarallax-clip-1">
          {`#jarallax-container-1 {
            clip: rect(0 1348px 901.90625px 0);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }`}
        </style>
      </head>

      <body className="custom-cursor">
        <div className="custom-cursor__cursor" />
        <div className="custom-cursor__cursor-two" />

        <div className="preloader" style={{ display: 'none' }}>
          <div className="preloader__image" style={{ backgroundImage: 'url(assets/images/loader.png)' }} />
        </div>

        <CartProvider>
          <div className="page-wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </CartProvider>

        <ScrollToTop />
      </body>
    </html>
  );
}
