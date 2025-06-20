import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
})

export const metadata = {
  title: "ava's website!",
  description: "ava nunes' personal website!",
  icons: {icon: '/ava-bubble.svg'}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
