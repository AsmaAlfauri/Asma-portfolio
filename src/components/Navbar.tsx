import { useState, useEffect } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const linkBase = 'px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200'
const linkActive = 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
const linkIdle = 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60'

const mobileLinkBase = 'block px-3 py-2 rounded-md text-sm font-medium transition-colors'
const mobileLinkIdle = 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'

export default function Navbar() {
  const { isDark, toggle } = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const headerClass = [
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md',
    scrolled ? 'shadow-sm border-b border-gray-200 dark:border-gray-800' : '',
  ].join(' ')

  const mobileMenuClass = [
    'md:hidden overflow-hidden transition-all duration-300',
    menuOpen ? 'max-h-96 border-b border-gray-200 dark:border-gray-800' : 'max-h-0',
  ].join(' ')

  return (
    <header className={headerClass}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#hero" className="font-mono text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          asma<span className="text-amber-500">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href}>
                <a href={link.href} className={linkBase + ' ' + (isActive ? linkActive : linkIdle)}>
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-600 dark:text-gray-300"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className={'block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ' + (menuOpen ? 'rotate-45 translate-y-2' : '')} />
            <span className={'block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ' + (menuOpen ? 'opacity-0' : '')} />
            <span className={'block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ' + (menuOpen ? '-rotate-45 -translate-y-2' : '')} />
          </button>
        </div>
      </nav>

      <div className={mobileMenuClass}>
        <ul className="flex flex-col px-6 pb-4 pt-2 gap-1">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkBase + ' ' + (isActive ? linkActive : mobileLinkIdle)}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}