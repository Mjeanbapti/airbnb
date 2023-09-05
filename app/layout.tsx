import './globals.css'
import { Nunito } from 'next/font/google';
import type { Metadata } from 'next'
import { NavBar } from './components/navbar/NavBar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';


export const metadata: Metadata = {
  title: 'AirBmB',
  description: 'Cloned AirBnB',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <NavBar />
        </ClientOnly>

        {children}
      </body>
    </html>
  )
}
