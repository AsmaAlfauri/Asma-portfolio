"use client"
import { motion } from "framer-motion";
import { Server, Layout, Database, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020617]">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1 rounded-md border border-slate-800 bg-slate-900/50 text-slate-400 text-xs font-mono mb-8"
          >
            <span className="text-emerald-500 font-bold">●</span>
            Open to Frontend / Full-Stack Opportunities
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-6"
          >
            Building Scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
              Web Applications
            </span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10"
          >
            Frontend Engineer specializing in React and Next.js ecosystems, focused on building 
            performant, scalable, and maintainable web applications. Experienced in frontend architecture, 
            state management, and delivering production-ready features in collaborative teams.
          </motion.p>

          {/* Metrics */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="flex gap-8 md:gap-16 mb-12 border-y border-slate-800/50 py-6"
          >
            <div className="text-center">
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Years Experience</p>
            </div>

            <div className="text-center">
                <p className="text-2xl font-bold text-white">React</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Core Stack</p>
            </div>

            <div className="text-center">
                <p className="text-2xl font-bold text-white">100+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Developers Mentored</p>
            </div>
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex gap-6 text-slate-600"
          >
            <Layout size={24} strokeWidth={1.5} />
            <Server size={24} strokeWidth={1.5} />
            <Database size={24} strokeWidth={1.5} />
            <Code2 size={24} strokeWidth={1.5} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;