import { projects } from "../data/Projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Projects
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
        A selection of production-ready applications focused on frontend architecture,
        AI integration, and scalable system design.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (
          <div
            key={project.title}
            className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
          >

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 text-sm">

              {project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-500 hover:text-amber-400 font-medium"
                >
                  Live →
                </a>
              )}

              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}