import React from 'react';
import { Github, Play, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onOpen }) => {
    return (
        <div
            className="card group cursor-pointer overflow-hidden"
            onClick={() => onOpen(project)}
        >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-text-secondary line-clamp-2 mb-4">
                    {project.description}
                </p>

                <div className="flex gap-3 text-text-secondary">
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="View on GitHub"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.links.video && (
                        <a
                            href={project.links.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Watch video"
                        >
                            <Play size={18} />
                        </a>
                    )}
                    {project.links.download && (
                        <a
                            href={project.links.download}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Download"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
