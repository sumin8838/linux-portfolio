import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '나의 포트폴리오',
  description: '아이보리 & 브라운 톤 포트폴리오',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <header>
          <h1>My Portfolio</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} 홍길동. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
