"use client"
import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/constants/skills";
import { Layout, Server, Settings, CheckCircle2 } from "lucide-react";

const iconMap = {
  Layout: <Layout className="text-blue-500" />,
  Server: <Server className="text-emerald-500" />,
  Settings: <Settings className="text-purple-500" />
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Ecosystem</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My arsenal for building high-performance applications, focused on modern standards and scalable architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-slate-700 transition-all group"
            >
              <div className="mb-6 p-4 bg-slate-800/50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {iconMap[group.icon as keyof typeof iconMap]}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{group.title}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-slate-400 group/item">
                    <CheckCircle2 size={16} className="text-slate-600 group-hover/item:text-blue-500 transition-colors" />
                    <span className="text-sm font-medium group-hover/item:text-slate-200 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;