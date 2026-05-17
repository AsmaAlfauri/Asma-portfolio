import { useEffect, useState } from 'react'

const roles = [
  'Frontend Engineer',
  'Building AI-Powered Web Apps',
  'React • Next.js • TypeScript',
  'OpenAI & RAG Systems',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && charIndex <= current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(i => i + 1)
      }, 60)

      return () => clearTimeout(timeout)
    }

    if (!deleting && charIndex > current.length) {
      const timeout = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(timeout)
    }

    if (deleting && charIndex >= 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(i => i - 1)
      }, 35)

      return () => clearTimeout(timeout)
    }

    if (deleting && charIndex < 0) {
      setDeleting(false)
      setCharIndex(0)
      setRoleIndex(i => (i + 1) % roles.length)
    }
  }, [charIndex, deleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-6 flex items-center justify-center text-center"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 dark:opacity-20 pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-400/10 dark:bg-amber-400/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-mono mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-4">
          Asma Alfauri
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl font-mono text-amber-500">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-10">
          Building scalable frontend systems and AI-powered web applications
          with React, Next.js, TypeScript, and OpenAI integrations.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </div>

        {/* Credibility */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-14">
          <span>5+ Years Experience</span>
          <span className="opacity-40">•</span>
          <span>AI-powered Applications</span>
          <span className="opacity-40">•</span>
          <span>100+ Developers Mentored</span>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-5">

          <a
            href="https://github.com/AsmaAlfauri"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-500 dark:text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>

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

          <a
            href="mailto:asmaa.alfauri@gmail.com"
            aria-label="Email"
            className="text-gray-500 dark:text-gray-400 hover:text-amber-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600">
        <span className="text-xs font-mono">scroll</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  )
}