'use client';

import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiGit, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'React', icon: SiReact, level: 95, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178c6' },
  { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#f7df1e' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: '#06b6d4' },
  { name: 'Git', icon: SiGit, level: 85, color: '#f05032' },
  { name: 'Figma', icon: SiFigma, level: 70, color: '#f24e1e' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="section-title">Навыки</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }} className="bg-gray-800 p-6 rounded-xl text-center hover:-translate-y-2 transition-all">
                <skill.icon className="text-5xl mx-auto mb-4" style={{ color: skill.color }} />
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div className="bg-primary h-2 rounded-full" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: 0.2 }} />
                </div>
                <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}