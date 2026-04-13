import { FaGithub, FaTelegram, FaVk, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {currentYear} Арутюн Маркосян. Все права защищены.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/arutyun" target="_blank" className="text-gray-400 hover:text-primary"><FaGithub size={20} /></a>
            <a href="https://t.me/arutyun" target="_blank" className="text-gray-400 hover:text-primary"><FaTelegram size={20} /></a>
            <a href="https://vk.com/arutyun" target="_blank" className="text-gray-400 hover:text-primary"><FaVk size={20} /></a>
            <a href="mailto:arutyun@example.com" className="text-gray-400 hover:text-primary"><FaEnvelope size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}