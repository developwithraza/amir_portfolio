import React from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { personalInfo } from "../data/resumeData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[10px] flex items-center justify-center font-bold text-sm text-blue-600 dark:text-cyan-400 font-mono">
                  A
                </div>
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                Amir Ansari
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Frontend & React.js Developer dedicated to engineering resilient, scalable architectures,
              real-time interfaces, and modern enterprise dashboards.
            </p>
            <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-zinc-400 pt-1">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                Available for hire
              </span>
              <span>•</span>
              <span>Indirapuram, Ghaziabad, UP</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-400">
              <li><a href="#about" className="hover:text-blue-500 transition">About Me</a></li>
              <li><a href="#experience" className="hover:text-blue-500 transition">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition">Featured Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-500 transition">Technical Skills</a></li>
              <li><a href="#education" className="hover:text-blue-500 transition">Education</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-zinc-400">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-500 transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-500 transition"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-800 dark:text-zinc-200" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 hover:text-blue-500 transition"
              >
                <Mail className="w-3.5 h-3.5 text-rose-500" />
                <span>Send Email</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-2 hover:text-emerald-500 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>+91-6200820423</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-slate-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} Amir Ansari. All rights reserved. Built with React & Vite.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 transition shadow-sm text-slate-700 dark:text-zinc-200"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-500" />
          </button>
        </div>
      </div>
    </footer>
  );
}
