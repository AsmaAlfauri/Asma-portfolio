"use client"
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/constants/experience";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Roadmap</h2>
          <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">From Execution to Architecture</p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-slate-800 group hover:border-blue-500/50 transition-colors"
            >
              {/* Dot on the line */}
              <div className="absolute w-3 h-3 bg-slate-800 rounded-full -left-[6.5px] top-1 group-hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/50 hover:bg-slate-900/60 transition-all">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase size={18} className="text-blue-500" />
                      {exp.role}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/5 text-blue-400/80 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-500/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;