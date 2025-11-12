'use client'

import './globals.css'
import { useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 페이지 이동 시 페이드 아웃 효과
  useEffect(() => {
    const handleBeforeUnload = () => {
      document.body.classList.add('fade-out')
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  return (
    <html lang="ko">
      <body>
        <header>
          <a href="#top" className="logo">
            Sumin
          </a>
          <nav>
            <a href="#about-title">About</a>
            <a href="#projects-title">Projects</a>
            <a href="#contact-title">Contact</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()} 최수민. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
