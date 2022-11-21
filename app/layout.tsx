import "./globals.css";
import { inter } from "../fonts/inter";
import MobileHeader from "../components/MobileHeader";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      </head>
      <body>
        <MobileHeader/>
        {children}
      </body>
    </html>
  )
}
