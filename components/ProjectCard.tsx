import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group mb-4 bg-white p-6 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">
            {project.title}
          </h3>
          {project.period && (
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
              {project.period}
            </p>
          )}
        </div>
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-4 text-slate-400 hover:text-slate-900 transition-colors p-1"
            aria-label="View Project"
          >
            {project.link.includes('github') ? <Github size={20} /> : <ExternalLink size={20} />}
          </a>
        )}
      </div>

      <p className="text-slate-600 mb-5 text-sm leading-7">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-full border border-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.imageUrl && (
        <div className="mt-4 rounded-md overflow-hidden border border-slate-100">
          <img 
            src={project.imageUrl} 
            alt={`${project.title} screenshot`} 
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;