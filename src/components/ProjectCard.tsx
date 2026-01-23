"use client"
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

export const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
    >
      <div className="p-8 relative z-10"> 
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
            <Layers size={24} />
          </div>
          

          <div className="flex gap-4 relative z-20"> 
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <Github size={20} />
            </a>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-blue-400 text-sm font-mono mb-4">{project.role}</p>
        <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-2 mb-8">
          {project.features.slice(0, 3).map((feature: string, i: number) => (
            <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-mono rounded-md border border-slate-700">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />
    </motion.div>
  );
};