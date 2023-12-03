import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children, }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Titulo em todas as páginas! </h1>
        {children}</body>
    </html>
  )
}