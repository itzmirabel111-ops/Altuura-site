export const metadata = {
  title: 'Altuura - Timeless Elegance',
  description: 'Inclusive • Elegant • Timeless',
}

import '../styles/header.css'
import Header from '../components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
