'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaVk, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const roles = ['Frontend Developer', 'React Specialist', 'Next.js Expert'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRole];
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
      } else {
        setDisplayText(prev => currentFullText.slice(0, prev.length + 1));
      }
    };
    if (!isDeleting && displayText === currentFullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole(prev => (prev + 1) % roles.length);
    }
    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-lg mb-4">Привет, я</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Арутюн <span className="text-primary">Маркосян</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-400 mb-6">
              <span className="border-r-2 border-primary pr-1">{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Создаю современные веб-приложения с отличным пользовательским опытом.
              Специализируюсь на React и Next.js.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">Связаться со мной</a>
              <a href="#projects" className="btn-outline">Посмотреть проекты</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/arutyun" target="_blank" className="text-2xl text-gray-400 hover:text-primary"><FaGithub /></a>
              <a href="https://t.me/arutyun" target="_blank" className="text-2xl text-gray-400 hover:text-primary"><FaTelegram /></a>
              <a href="https://vk.com/arutyun" target="_blank" className="text-2xl text-gray-400 hover:text-primary"><FaVk /></a>
              <a href="mailto:arutyun@example.com" className="text-2xl text-gray-400 hover:text-primary"><FaEnvelope /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl bg-gray-800 flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}