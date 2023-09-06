import './globals.css'
import { Nunito } from 'next/font/google';
import type { Metadata } from 'next'
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import NavBar from './components/navbar/NavBar';


export const metadata: Metadata = {
  title: 'AirBmB',
  description: 'Cloned AirBnB',
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={currentUser}/>
        </ClientOnly>

        {children}
      </body>
    </html>
  )
}
