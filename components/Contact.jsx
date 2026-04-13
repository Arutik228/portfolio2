'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaVk, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 1000);
  };

  const contacts = [
    { name: 'Telegram', icon: FaTelegram, value: '@arutyun', link: 'https://t.me/arutyun' },
    { name: 'VK', icon: FaVk, value: 'arutyun', link: 'https://vk.com/arutyun' },
    { name: 'GitHub', icon: FaGithub, value: 'arutyun', link: 'https://github.com/arutyun' },
    { name: 'Email', icon: FaEnvelope, value: 'arutyun@example.com', link: 'mailto:arutyun@example.com' },
    { name: 'Телефон', icon: FaPhone, value: '+7 (999) 123-45-67', link: 'tel:+79991234567' },
    { name: 'Москва', icon: FaMapMarkerAlt, value: 'Москва, Россия', link: '#' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="section-title">Свяжитесь со мной</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контакты</h3>
              <div className="space-y-4">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a key={contact.name} href={contact.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group">
                      <Icon className="text-2xl text-primary group-hover:scale-110 transition-transform" />
                      <div><p className="text-sm text-gray-400">{contact.name}</p><p className="font-medium">{contact.value}</p></div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Напишите мне</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Ваше имя" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary" />
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Сообщение" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary" />
                <button type="submit" disabled={status === 'sending'} className="w-full btn-primary disabled:opacity-50">
                  {status === 'sending' ? 'Отправка...' : 'Отправить сообщение'}
                </button>
                {status === 'success' && <p className="text-green-500 text-center">Сообщение отправлено!</p>}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}