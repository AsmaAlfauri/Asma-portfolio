import { skills } from "../data/Skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div
            key={group.title}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4 text-amber-500">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}