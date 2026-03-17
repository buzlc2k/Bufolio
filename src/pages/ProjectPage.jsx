import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Play, Download, ArrowLeft } from 'lucide-react';
import { FloatingPixelDecorations } from '../components/PixelDecorations';
import PROJECTS from '../projects';

function ProjectPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-bold text-text-primary pixel-text mb-4">Project Not Found</h1>
                <p className="text-text-secondary mb-8">No project matches "<span className="text-accent">{slug}</span>".</p>
                <button
                    onClick={() => navigate('/')}
                    className="btn flex items-center gap-2 pixel-btn"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </button>
            </div>
        );
    }

    const tagColors = {
        GameProject: { bg: '#FF3366', border: '#CC2952' },
        ToolProject: { bg: '#00E5A0', border: '#00B880' },
        PersonalProject: { bg: '#FFB800', border: '#CC9300' },
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            <FloatingPixelDecorations />

            {/* Diagonal grid background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute w-full h-full" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #4A90E2 0px, #4A90E2 2px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, #4A90E2 0px, #4A90E2 2px, transparent 2px, transparent 20px)',
                    animation: 'slideBackground 30s linear infinite'
                }} />
            </div>

            {/* Back button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => window.location.href = "https://buzlc2k.github.io/Bufolio/"}
                className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-bg-secondary border-2 sm:border-4 border-border rounded-lg shadow-card hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 text-text-primary text-xs sm:text-sm font-bold pixel-btn"
            >
                <ArrowLeft size={16} />
                Another Projects
            </motion.button>

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-24 relative z-10">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start lg:items-center my-auto">

                    {/* Left: Cover Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="order-2 lg:order-1 lg:col-span-3"
                    >
                        <div className="aspect-video rounded-lg overflow-hidden border-3 sm:border-4 border-border bg-gray-100 shadow-card pixel-border">
                            <img
                                src={project.coverImage}
                                alt={project.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="order-1 lg:order-2 lg:col-span-2"
                    >
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-text-primary pixel-text leading-tight">
                            {project.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6">
                            {project.tags.map((tag, i) => {
                                const colors = tagColors[tag] || { bg: '#00D9FF', border: '#00A8CC' };
                                return (
                                    <span
                                        key={i}
                                        className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-white font-bold pixel-tag text-xs sm:text-sm"
                                        style={{ backgroundColor: colors.bg, borderColor: colors.border }}
                                    >
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Description */}
                        <div className="mb-3 sm:mb-4 md:mb-6">
                            <h2 className="text-xs sm:text-sm font-bold text-text-primary mb-1.5 sm:mb-2 uppercase tracking-wide">Description</h2>
                            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Key Technical Features */}
                        <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                            <h2 className="text-xs sm:text-sm font-bold text-text-primary mb-1.5 sm:mb-2 md:mb-3 uppercase tracking-wide">Key Technical Features</h2>
                            <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-xs sm:text-sm text-text-secondary max-h-48 overflow-y-auto pr-2">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-accent mr-1.5 sm:mr-2 mt-0.5 text-sm sm:text-base pixel-bullet flex-shrink-0">▪</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn text-xs flex items-center gap-1.5 sm:gap-2 pixel-btn"
                                >
                                    <Github size={12} className="sm:w-3.5 sm:h-3.5" />
                                    GitHub
                                </a>
                            )}
                            {project.links.video && (
                                <a
                                    href={project.links.video}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline text-xs flex items-center gap-1.5 sm:gap-2 pixel-btn"
                                >
                                    <Play size={12} className="sm:w-3.5 sm:h-3.5" />
                                    Video
                                </a>
                            )}
                            {project.links.download && (
                                <a
                                    href={project.links.download}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline text-xs flex items-center gap-1.5 sm:gap-2 pixel-btn"
                                >
                                    <Download size={12} className="sm:w-3.5 sm:h-3.5" />
                                    Download
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
