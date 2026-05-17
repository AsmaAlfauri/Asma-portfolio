import { useDarkMode } from './hooks/useDarkMode'
import Navbar from './components/Navbar'

function App() {
  useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        {['hero','about','skills','experience','projects','testimonials','blog','contact'].map(id => (
          <section
            key={id}
            id={id}
            className="min-h-screen flex items-center justify-center border-b border-gray-100 dark:border-gray-800"
          >
            <span className="text-2xl font-mono text-gray-400 capitalize">{id}</span>
          </section>
        ))}
      </main>
    </div>
  )
}

export default App