'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaInfoCircle, FaStar, FaCodeBranch, FaCalendarAlt } from 'react-icons/fa';

export default function ProjectClient({ project }) {
  const [mounted, setMounted] = useState(false);
  const [repoStats, setRepoStats] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (project?.github) {
      const match = project.github.match(/github\.com\/([^\/]+)\/([^\/]+)/);
      if (match) {
        const [, owner, repo] = match;
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
          .then(res => res.ok ? res.json() : null)
          .then(data => {
            if (data) {
              setRepoStats({
                stars: data.stargazers_count,
                forks: data.forks_count,
                language: data.language,
                lastCommit: data.updated_at ? new Date(data.updated_at).toLocaleDateString('ru-RU') : null,
              });
            }
          })
          .catch(() => {});
      }
    }
  }, [project?.github]);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-400 mb-8">Проект не найден</p>
          <Link href="/#projects" className="px-6 py-3 bg-primary text-white rounded-lg">
            Вернуться к проектам
          </Link>
        </div>
      </div>
    );
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-dark pt-24 pb-16">
        <div className="container-custom">
          <div className="h-10 w-32 bg-gray-700 rounded animate-pulse mb-8"></div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="h-96 bg-gray-700 rounded-xl animate-pulse"></div>
            <div className="space-y-6">
              <div className="h-12 w-3/4 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 w-full bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16">
      <div className="container-custom">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mb-8">
          <FaArrowLeft /> Назад к проектам
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-800">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-gray-400">{project.description}</p>

            {repoStats && (
              <div className="flex flex-wrap gap-4 p-4 bg-gray-800 rounded-lg">
                {repoStats.stars !== undefined && (
                  <div className="flex items-center gap-2"><FaStar className="text-yellow-400" /> {repoStats.stars} stars</div>
                )}
                {repoStats.forks !== undefined && (
                  <div className="flex items-center gap-2"><FaCodeBranch className="text-gray-400" /> {repoStats.forks} forks</div>
                )}
                {repoStats.language && (
                  <div className="flex items-center gap-2"><span className="text-blue-400">●</span> {repoStats.language}</div>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <a href={project.github} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-primary transition">
                <FaGithub /> GitHub репозиторий
              </a>
              <a href={project.demo} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-primary rounded-lg hover:bg-primary/80 transition">
                <FaExternalLinkAlt /> Живая демо
              </a>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Технологии</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaInfoCircle className="text-primary" /> О проекте
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}