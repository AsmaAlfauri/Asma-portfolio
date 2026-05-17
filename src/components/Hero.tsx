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