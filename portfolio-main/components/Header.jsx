'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Главная', href: '#hero' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Навыки', href: '#skills' },
  { name: 'Проекты', href: '#projects' },
  { name: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-custom py-4 flex justify-between items-center">
        <motion.a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Арутюн
        </motion.a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-light hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button className="md:hidden text-2xl z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-md py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-center hover:text-primary transition-colors"
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}