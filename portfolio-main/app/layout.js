import './globals.css';

export const metadata = {
  title: 'Арутюн Маркосян | Frontend Developer | Портфолио',
  description: 'Frontend разработчик с опытом создания современных веб-приложений. React, Next.js, Three.js специалист.',
  keywords: 'frontend developer, react developer, nextjs, three.js, портфолио разработчика',
  authors: [{ name: 'Арутюн Маркосян' }],
  openGraph: {
    title: 'Арутюн Маркосян | Frontend Developer',
    description: 'Современные веб-приложения, React, Next.js, Three.js',
    images: [
      {
        url: 'https://portal.rudn-sochi.ru/pluginfile.php/278032/user/icon/classic/f1?rev=3278640',
        width: 400,
        height: 400,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-dark text-light">
        <main>{children}</main>
      </body>
    </html>
  );
}