'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: '3D Портфолио',
    description: 'Интерактивное 3D портфолио с анимациями на Three.js',
    image: 'https://placehold.co/600x400/1e293b/3b82f6?text=3D+Portfolio',
    technologies: ['React', 'Three.js', 'Tailwind'],
    github: 'https://github.com/arutyun/3d-portfolio',
    demo: 'https://arutyun.github.io/3d-portfolio',
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce',
    description: 'Интернет-магазин с корзиной и оплатой Stripe',
    image: 'https://placehold.co/600x400/1e293b/10b981?text=E-commerce',
    technologies: ['Next.js', 'Stripe', 'Tailwind'],
    github: 'https://github.com/arutyun/ecommerce',
    demo: 'https://arutyun.github.io/ecommerce',
    featured: true,
  },
  {
    id: 3,
    title: 'Аналитика',
    description: 'Дашборд для бизнес-аналитики',
    image: 'https://placehold.co/600x400/1e293b/f59e0b?text=Analytics',
    technologies: ['React', 'Recharts', 'Redux'],
    github: 'https://github.com/arutyun/analytics-dashboard',
    demo: 'https://arutyun.github.io/analytics-dashboard',
    featured: false,
  },
  {
    id: 4,
    title: 'Социальная сеть',
    description: 'Платформа для общения и обмена контентом',
    image: 'https://placehold.co/600x400/1e293b/ef4444?text=Social+Network',
    technologies: ['Next.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/arutyun/social-network',
    demo: 'https://arutyun.github.io/social-network',
    featured: false,
  },
  {
    id: 5,
    title: 'Погода',
    description: 'Приложение для отслеживания погоды',
    image: 'https://placehold.co/600x400/1e293b/06b6d4?text=Weather+App',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/arutyun/weather-app',
    demo: 'https://arutyun.github.io/weather-app',
    featured: false,
  },
  {
    id: 6,
    title: 'Генератор резюме',
    description: 'Инструмент для создания и экспорта резюме',
    image: 'https://placehold.co/600x400/1e293b/8b5cf6?text=Resume+Builder',
    technologies: ['Next.js', 'PDF Generator', 'Tailwind'],
    github: 'https://github.com/arutyun/resume-builder',
    demo: 'https://arutyun.github.io/resume-builder',
    featured: true,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);
  const featuredCount = projects.filter(p => p.featured).length;

  return (
    <section id="projects" className="py-20 bg-gray-850">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="section-title">Мои проекты</h2>

          <div className="flex justify-center gap-4 mb-12">
            <button onClick={() => setFilter('all')} className={`px-6 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
              Все проекты ({projects.length})
            </button>
            <button onClick={() => setFilter('featured')} className={`px-6 py-2 rounded-full transition-all ${filter === 'featured' ? 'bg-primary text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
              Избранное ({featuredCount})
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full">Подробнее →</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-3 text-sm line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-700 rounded-full text-xs hover:bg-primary transition">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition text-sm"><FaGithub /> Code</a>
                    <a href={project.demo} target="_blank" className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition text-sm"><FaExternalLinkAlt /> Demo</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}