import localFont from "next/font/local";

import "./globals.css";

const greenBrooks = localFont({
  src: "./green-brooks-regular.woff2",
  display: "swap",
  variable: "--font-green-brooks",
});

const strawford = localFont({
  src: "./strawford-regular-webfont.woff2",
  display: "swap",
  variable: "--font-strawford",
});

export const metadata = {
  title: "Push Ambassadors",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${greenBrooks.variable} ${strawford.className} antialiased w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
