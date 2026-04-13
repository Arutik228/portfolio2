import { projects } from '@/app/data/projects';
import ProjectClient from './ProjectClient';

// Генерируем статические пути (только на сервере)
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

// Серверный компонент (без 'use client')
export default function ProjectPage({ params }) {
  const { id } = params;
  const project = projects.find(p => p.id.toString() === id);
  
  return <ProjectClient project={project} />;
}