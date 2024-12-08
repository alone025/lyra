import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="card-gradient flex flex-col h-full rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 min-h-48 object-cover"
      />
      <div className="p-6 flex flex-col h-full justify-between">
       <div className='noDesign'>
       <h3 className="text-xl font-semibold text-white-900 mb-2">{project.title}</h3>
        <p className="text-white-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-indigo-100 bg-indigo-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
       </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white transition-colors hover:text-indigo-700"
          >
            View Project <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;