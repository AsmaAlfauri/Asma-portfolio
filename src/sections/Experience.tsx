import { experiences } from "../data/Experinces";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="border-l-2 border-amber-500 pl-6"
          >
            <h3 className="text-xl font-semibold">
              {exp.role} · <span className="text-amber-500">{exp.company}</span>
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              {exp.period}
            </p>

            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {exp.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  )
}