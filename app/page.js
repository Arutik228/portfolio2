'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaTelegram, FaVk, FaEnvelope, FaExternalLinkAlt, FaAmazon, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['Frontend Developer', 'React Specialist', 'Next.js Expert', 'Three.js Enthusiast'];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
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
  }, [displayText, isDeleting, currentRole, roles, mounted]);

  const projects = [
    {
      id: 1,
      title: '3D Портфолио',
      description: 'Интерактивное 3D портфолио с анимациями на Three.js',
      image: 'https://github.com/ladunjexa/reactjs18-3d-portfolio/blob/main/.github/README_ASSETS/3d-portfolio.png?raw=true',
      technologies: ['React', 'Three.js', 'Tailwind'],
      github: 'https://github.com/ladunjexa/reactjs18-3d-portfolio',
      demo: 'https://3d-portfolio.demo',
      longDescription: 'Полностью интерактивное 3D портфолио с анимированным персонажем, летающими бабочками и динамическим освещением.',
      source: 'Amazon',
      sourceIcon: FaAmazon,
      sourceColor: 'bg-orange-500',
    },
    {
      id: 2,
      title: 'E-commerce',
      description: 'Интернет-магазин с корзиной и оплатой Stripe',
      image: 'https://user-images.githubusercontent.com/59404615/208036926-a4863d53-8c29-43cd-9da4-8fbd99eb6909.png',
      technologies: ['Next.js', 'Stripe', 'Tailwind'],
      github: 'https://github.com/andrewtch88/mvc-ecommerce',
      demo: 'https://ecommerce.demo',
      longDescription: 'Полноценный интернет-магазин с авторизацией, корзиной, оформлением заказов и интеграцией платежей Stripe.',
      source: 'VK',
      sourceIcon: FaVk,
      sourceColor: 'bg-blue-600',
    },
    {
      id: 3,
      title: 'Аналитика',
      description: 'Дашборд для бизнес-аналитики',
      image: 'https://marketplace-screenshots.githubusercontent.com/github-production-marketplace-screenshot-16aed3/10206/dc999f6a-f191-4fc3-b299-d1cfdda85da6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260328T082746Z&X-Amz-Expires=300&X-Amz-Signature=54db0a5be6f15b121749d90314fa1b3202b408564574aaa8a93ddf2fb24e272d&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9tYXJrZXRwbGFjZS1zY3JlZW5zaG90cy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3NDY4Njc2NiwibmJmIjoxNzc0Njg2NDY2LCJwYXRoIjoibWFya2V0cGxhY2Utc2NyZWVuc2hvdHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.6TZQTf2CMmSSlWQhgNvlW56_DunmV3GfV4FkF_6hQKE&response-content-disposition=attachment%3Bfilename%3DCleanShot.2024-03-13.at.11.30.24.png&response-content-type=image%2Fpng',
      technologies: ['React', 'Recharts', 'Redux'],
      github: 'https://github.com/marketplace/analytics-reports',
      demo: 'https://dashboard.demo',
      longDescription: 'Мощный инструмент для визуализации данных с графиками, таблицами и экспортом в CSV/PDF.',
      source: 'Telegram',
      sourceIcon: FaTelegram,
      sourceColor: 'bg-blue-400',
    },
    {
      id: 4,
      title: 'Социальная сеть',
      description: 'Платформа для общения и обмена контентом',
      image: 'https://camo.githubusercontent.com/9ad58694510891cef6154fb7a37de7ef2ea6a5275ff810c754dbc9c2fcb3abbe/68747470733a2f2f7261772e6769746875622e636f6d2f706162726167696e2f536f6369616c4e65742f6d61737465722f696d616765732f6661696c626f6f6b2e706e67',
      technologies: ['Next.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/pabragin/SocialNet',
      demo: 'https://social.demo',
      longDescription: 'Социальная сеть с постами, лайками, комментариями и чатом в реальном времени.',
      source: 'YouTube',
      sourceIcon: FaYoutube,
      sourceColor: 'bg-red-600',
    },
    {
      id: 5,
      title: 'Погода',
      description: 'Приложение для отслеживания погоды',
      image: 'https://github.com/darkmoonight/Rain/blob/main/readme/1.png?raw=true',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/darkmoonight/Rain',
      demo: 'https://weather.demo',
      longDescription: 'Показывает текущую погоду, прогноз на 7 дней и интерактивную карту осадков.',
      source: 'Twitter',
      sourceIcon: FaTwitter,
      sourceColor: 'bg-sky-500',
    },
    {
      id: 6,
      title: 'Генератор резюме',
      description: 'Инструмент для создания и экспорта профессиональных резюме',
      image: 'https://github.com/amruthpillai/reactive-resume/blob/main/public/templates/jpg/azurill.jpg?raw=true',
      technologies: ['Next.js', 'PDF Generator', 'Tailwind'],
      github: 'https://github.com/amruthpillai/reactive-resume',
      demo: 'https://resume.demo',
      longDescription: 'Конструктор резюме с шаблонами, предпросмотром и экспортом в PDF.',
      source: 'Instagram',
      sourceIcon: FaInstagram,
      sourceColor: 'bg-pink-500',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [imageDimensions, setImageDimensions] = useState({});

  const handleImageLoad = (id, e) => {
    const img = e.target;
    const width = img.naturalWidth;
    const height = img.naturalHeight;
    setImageDimensions(prev => ({
      ...prev,
      [id]: { width, height, ratio: width / height }
    }));
  };

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  if (!mounted) {
    return <div className="min-h-screen bg-dark flex items-center justify-center"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;
  }

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* HERO СЕКЦИЯ */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://m.media-amazon.com/images/I/81QZq8YxJhL._AC_SX679_.jpg" 
            alt="" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/85 to-dark/70"></div>
        </div>
        <div className="container-custom py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-lg mb-4">Привет, я</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Арутюн <span className="text-primary">Маркосян</span></h1>
              <div className="text-2xl md:text-3xl text-gray-400 mb-6">
                <span className="border-r-2 border-primary pr-1">{displayText}</span><span className="animate-pulse">|</span>
              </div>
              <p className="text-gray-300 mb-8 text-lg">Создаю современные веб-приложения с отличным пользовательским опытом. Специализируюсь на React, Next.js и 3D графике.</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/80 hover:scale-105 transition">Связаться со мной</a>
                <a href="#projects" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition">Посмотреть проекты</a>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/arutyun" target="_blank" className="text-2xl text-gray-400 hover:text-primary"><FaGithub /></a>
                <a href="https://t.me/arutyun" target="_blank" className="text-2xl text-gray-400 hover:text-primary"><FaTelegram /></a>
                <a href="https://vk.com/arutyun" target="_blank" className="text-2xl text-gray-400 hover:text-primary"><FaVk /></a>
                <a href="mailto:arutyun@example.com" className="text-2xl text-gray-400 hover:text-primary"><FaEnvelope /></a>
              </div>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src="https://portal.rudn-sochi.ru/pluginfile.php/278032/user/icon/classic/f1?rev=3278640" 
                  alt="avatar" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ПРОЕКТЫ */}
      <section id="projects" className="py-20 bg-gray-850">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Мои проекты</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => {
              const Icon = project.sourceIcon;
              const dimension = imageDimensions[project.id];
              // Автоматическое определение соотношения сторон
              const aspectStyle = dimension ? {
                aspectRatio: `${dimension.width} / ${dimension.height}`
              } : { aspectRatio: '16 / 9' };
              
              return (
                <div key={project.id} onClick={() => setSelectedProject(project)} className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-all cursor-pointer group flex flex-col h-full">
                  <div 
                    className="relative w-full overflow-hidden bg-gray-700 flex-shrink-0"
                    style={aspectStyle}
                  >
                    {!imageErrors[project.id] ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onLoad={(e) => handleImageLoad(project.id, e)}
                        onError={() => handleImageError(project.id)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                        <div className="text-center">
                          <span className="text-4xl mb-2 block">🖼️</span>
                          <p className="text-sm text-gray-400">Изображение недоступно</p>
                          <p className="text-xs text-gray-500 mt-1">{project.title}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 z-10">
                      <span className={`text-xs px-2 py-1 rounded-full ${project.sourceColor} text-white flex items-center gap-1 shadow-lg`}>
                        <Icon className="text-xs" /> {project.source}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full">Подробнее →</span>
                    </div>
                    
                    {dimension && process.env.NODE_ENV === 'development' && (
                      <div className="absolute bottom-1 left-1 bg-black/50 text-white text-xs px-2 py-0.5 rounded">
                        {dimension.width}×{dimension.height}
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-gray-400 mb-3 flex-grow line-clamp-2 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map(tech => <span key={tech} className="px-2 py-1 bg-gray-700 rounded-full text-xs hover:bg-primary transition">{tech}</span>)}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <a href={project.github} target="_blank" onClick={e => e.stopPropagation()} className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition text-sm"><FaGithub /> Code</a>
                      <a href={project.demo} target="_blank" onClick={e => e.stopPropagation()} className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition text-sm"><FaExternalLinkAlt /> Demo</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* МОДАЛЬНОЕ ОКНО ПРОЕКТА */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-gray-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative w-full bg-gray-900 flex items-center justify-center p-4" style={{ minHeight: '300px', maxHeight: '60vh' }}>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="max-w-full max-h-[55vh] object-contain"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x600/1e293b/3b82f6?text=' + encodeURIComponent(selectedProject.title);
                }}
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full ${selectedProject.sourceColor} text-white flex items-center gap-2 shadow-lg`}>
                  <selectedProject.sourceIcon /> {selectedProject.source}
                </span>
              </div>
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition">✕</button>
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-400 mb-6">{selectedProject.description}</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Описание проекта</h3>
                <p className="text-gray-300">{selectedProject.longDescription}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Технологии</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tech}</span>)}
                </div>
              </div>
              <div className="flex gap-4">
                <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-primary transition"><FaGithub /> GitHub репозиторий</a>
                <a href={selectedProject.demo} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-primary rounded-lg hover:bg-primary/80 transition"><FaExternalLinkAlt /> Живая демо</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* КОНТАКТЫ */}
      <section id="contact" className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Свяжитесь со мной</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <a href="https://t.me/Arutik52" target="_blank" className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition group"><FaTelegram className="text-2xl text-primary group-hover:scale-110" /><div><p className="text-sm text-gray-400">Telegram</p><p className="font-medium">@Arutik52</p></div></a>
              <a href="https://github.com/Arutik228" target="_blank" className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition group"><FaGithub className="text-2xl text-primary group-hover:scale-110" /><div><p className="text-sm text-gray-400">GitHub</p><p className="font-medium">Arutik228</p></div></a>
              <a href="mailto:arutiktopcik@gmail.com" className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition group"><FaEnvelope className="text-2xl text-primary group-hover:scale-110" /><div><p className="text-sm text-gray-400">Email</p><p className="font-medium">arutiktopcik@gmail.com</p></div></a>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Напишите мне</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:border-primary" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:border-primary" />
                <textarea rows="5" placeholder="Сообщение" className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:border-primary"></textarea>
                <button className="w-full py-3 bg-primary rounded-lg font-semibold hover:bg-primary/80 transition">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 text-center text-gray-400 text-sm">
        <div className="container-custom">
          <p>© 2026 Арутюн Маркосян. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}