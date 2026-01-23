"use client"
import { motion } from "framer-motion";
import { Github, Mail, Phone, FileText, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-slate-900 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Left Side: Professional Hook */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to build <br /> 
              <span className="text-blue-500">the next big thing?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md mb-8">
              Currently available for Senior Full-Stack roles and architectural consulting. 
              Let's turn your vision into a scalable reality.
            </p>
          </div>

          {/* Right Side: Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a 
              href="mailto:asmaa.alfauri@gmail.com"
              className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all"
            >
              <Mail className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-white font-medium truncate">asmaa.alfauri@gmail.com</p>
            </a>

            <a 
              href="tel:+971563950010"
              className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all"
            >
              <Phone className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">WhatsApp / Call</p>
              <p className="text-white font-medium">+971 56 395 0010</p>
            </a>

            <a 
              href="https://drive.google.com/drive/folders/1rZtrWzvOTEJ-a7jeEfBlGErNbVHH7PsN?usp=sharing"
              target="_blank"
              className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all"
            >
              <FileText className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Resume</p>
              <p className="text-white font-medium flex items-center gap-1">
                View CV <ArrowUpRight size={14} />
              </p>
            </a>

            <a 
              href="https://github.com/AsmaAlfauri"
              target="_blank"
              className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all"
            >
              <Github className="text-slate-400 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Source Code</p>
              <p className="text-white font-medium flex items-center gap-1">
                GitHub Profile <ArrowUpRight size={14} />
              </p>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 gap-4">
          <p className="text-slate-500 text-sm italic">
            Built with Next.js 15 Engineering at its finest.
          </p>
          <p className="text-slate-500 text-sm">
            © {currentYear} Asma Alfauri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;