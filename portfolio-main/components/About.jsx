'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-850">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="section-title">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Привет! Я Арутюн, Frontend разработчик с 5-летним опытом создания современных веб-приложений.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Моя страсть — создавать не просто сайты, а полноценные цифровые продукты, которые решают реальные проблемы пользователей.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div><p className="text-gray-400">📍 Местоположение</p><p className="font-semibold">Москва, Россия</p></div>
                <div><p className="text-gray-400">🎓 Образование</p><p className="font-semibold">МГТУ им. Баумана</p></div>
                <div><p className="text-gray-400">💼 Опыт</p><p className="font-semibold">5+ лет</p></div>
                <div><p className="text-gray-400">📧 Email</p><p className="font-semibold">arutyun@example.com</p></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-xl text-center hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold mb-2">Миссия</h3>
                <p className="text-sm text-gray-400">Создавать продукты, которые делают жизнь лучше</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl text-center hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-bold mb-2">Видение</h3>
                <p className="text-sm text-gray-400">Веб, который вдохновляет</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl text-center hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-bold mb-2">Подход</h3>
                <p className="text-sm text-gray-400">Код как искусство</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl text-center hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold mb-2">Ценности</h3>
                <p className="text-sm text-gray-400">Качество, открытость</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}