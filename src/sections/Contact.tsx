
export default function Contact() {


  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>

      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
        Got a project or opportunity? Let’s connect and build something great
        together.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left side - Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">
              asmaa.alfauri@gmail.com
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">Abu Dhabi, UAE</p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold mb-2">Availability</h3>
            <p className="text-amber-500 font-medium">Open to opportunities</p>
          </div>
        </div>

        {/* Right side - Info */}
        <div className="space-y-6">
          {/* GitHub */}
          <a
            href="https://github.com/AsmaAlfauri"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition"
          >
            <div>
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                github.com/AsmaAlfauri
              </p>
            </div>
            <span className="text-gray-400">↗</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/asma-alfauri"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition"
          >
            <div>
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                linkedin.com/in/asma-alfauri
              </p>
            </div>
            <span className="text-gray-400">↗</span>
          </a>

          {/* CV */}
          <a
            href="https://drive.google.com/drive/folders/1rZtrWzvOTEJ-a7jeEfBlGErNbVHH7PsN?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-amber-400 transition"
          >
            <div>
              <h3 className="font-semibold mb-1">CV / Portfolio Files</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Google Drive Folder
              </p>
            </div>
            <span className="text-amber-500">⬇</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+971563950010"
            className="flex items-center justify-between p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition"
          >
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                +971 56 395 0010
              </p>
            </div>
            <span className="text-gray-400">📞</span>
          </a>
        </div>
      </div>
    </section>
  );
}
