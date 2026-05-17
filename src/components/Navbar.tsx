import { useState, useEffect } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const linkBase =
  'px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200'
const linkActive =
  'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
const linkIdle =
  'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60'

const mobileLinkBase =
  'block px-3 py-2 rounded-md text-sm font-medium transition-colors'
const mobileLinkIdle =
  'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'

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
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
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
    scrolled
      ? 'shadow-sm border-b border-gray-200 dark:border-gray-800'
      : '',
  ].join(' ')

  const mobileMenuClass = [
    'md:hidden overflow-hidden transition-all duration-300',
    menuOpen
      ? 'max-h-96 border-b border-gray-200 dark:border-gray-800'
      : 'max-h-0',
  ].join(' ')

  return (
    <header className={headerClass}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          asma<span className="text-amber-500">alfauri</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.slice(1)

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    linkBase + ' ' + (isActive ? linkActive : linkIdle)
                  }
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Socials */}
          <div className="hidden md:flex items-center gap-3 mr-2">

            {/* GitHub */}
            <a
              href="https://github.com/AsmaAlfauri"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/asma-alfauri"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:asmaa.alfauri@gmail.com"
              aria-label="Email"
              className="text-gray-500 dark:text-gray-400 hover:text-amber-500 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

          </div>

          {/* Dark Mode */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-600 dark:text-gray-300"
          >
            {isDark ? '🌙' : '☀️'}
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span
              className={
                'block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ' +
                (menuOpen ? 'rotate-45 translate-y-2' : '')
              }
            />
            <span
              className={
                'block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ' +
                (menuOpen ? 'opacity-0' : '')
              }
            />
            <span
              className={
                'block h-0.5 w-5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ' +
                (menuOpen ? '-rotate-45 -translate-y-2' : '')
              }
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={mobileMenuClass}>
        <ul className="flex flex-col px-6 pb-4 pt-2 gap-1">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.slice(1)

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    mobileLinkBase +
                    ' ' +
                    (isActive ? linkActive : mobileLinkIdle)
                  }
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