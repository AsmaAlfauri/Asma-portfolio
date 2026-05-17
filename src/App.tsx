import { useDarkMode } from './hooks/useDarkMode'

function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <button onClick={toggle} className="fixed top-4 right-4 z-50 p-2 rounded-full border border-gray-300 dark:border-gray-700">
        {isDark ? '☀️' : '🌙'}
      </button>
      <h1 className="text-4xl font-bold text-center pt-20">
        Asma Alfauri
      </h1>
    </div>
  )
}

export default App