import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Github, Mail, ChevronLeft, ChevronRight, Play, ExternalLink, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingPixelDecorations } from './components/PixelDecorations';
import PROJECTS from './projects';
import ProjectPage from './pages/ProjectPage';

// ─── Intro Slide ─────────────────────────────────────────────────────────────
const IntroSlide = () => (
    <div className="h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 relative overflow-hidden">
        {/* Subtle Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute w-full h-full" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #4A90E2 0px, #4A90E2 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, #4A90E2 0px, #4A90E2 1px, transparent 1px, transparent 30px)',
                animation: 'slideBackground 30s linear infinite'
            }} />
        </div>

        <div className="max-w-5xl text-center relative z-10">
            {/* Name with Vietnamese Pixel Font */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-text-primary pixel-text-vn"
            >
                Phạm Bá Đức
            </motion.h1>

            {/* Simple underline */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="h-1 w-20 sm:w-32 bg-accent mx-auto mb-6 sm:mb-12"
            />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary mb-8 sm:mb-16 leading-relaxed max-w-4xl mx-auto px-2"
            >
                I'm a Unity developer with a degree in Management Information Systems from the University of Economics Ho Chi Minh City. I specialize in building mobile games with Unity (C#) and enjoy turning technical challenges into practical, well-executed solutions. I'm passionate about exploring new technologies and always eager to improve my craft. I'm open to studio opportunities — let's build something fun.
            </motion.p>

            {/* Social links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-3 sm:gap-6 justify-center text-text-secondary"
            >
                <motion.a
                    href="https://github.com/buzlc2k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 rounded-lg border-3 sm:border-4 border-border bg-bg-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 shadow-pixel"
                    whileHover={{ y: -3 }}
                >
                    <Github size={24} className="sm:w-8 sm:h-8" />
                </motion.a>
                <motion.a
                    href="mailto:baducpham0912@gmail.com"
                    className="p-3 sm:p-4 rounded-lg border-3 sm:border-4 border-border bg-bg-secondary hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 shadow-pixel"
                    whileHover={{ y: -3 }}
                >
                    <Mail size={24} className="sm:w-8 sm:h-8" />
                </motion.a>
            </motion.div>
        </div>
    </div>
);

// ─── Project Slide ────────────────────────────────────────────────────────────
const ProjectSlide = ({ project }) => {
    const navigate = useNavigate();

    const tagColors = {
        GameProject:     { bg: '#FF3366', border: '#CC2952' },
        ToolProject:     { bg: '#00E5A0', border: '#00B880' },
        PersonalProject: { bg: '#FFB800', border: '#CC9300' },
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-12 lg:py-20 relative overflow-y-auto">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute w-full h-full" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #4A90E2 0px, #4A90E2 2px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, #4A90E2 0px, #4A90E2 2px, transparent 2px, transparent 20px)',
                    animation: 'slideBackground 30s linear infinite'
                }} />
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-12 items-start lg:items-center relative z-10 my-auto">
                {/* Left: Image - Takes 3 columns (60%) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="order-2 lg:order-1 lg:col-span-3"
                >
                    {/* Clickable image → navigate to project page */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => navigate(`/projects/${project.slug}`)}
                        className="aspect-video rounded-lg overflow-hidden border-3 sm:border-4 border-border bg-gray-100 shadow-card pixel-border cursor-pointer relative group"
                    >
                        <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-contain transition-opacity duration-200 group-hover:opacity-80"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <span className="bg-accent text-white font-bold px-4 py-2 rounded-lg pixel-btn text-sm flex items-center gap-2">
                                <ExternalLink size={14} />
                                View Details
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right: Content - Takes 2 columns (40%) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="order-1 lg:order-2 lg:col-span-2"
                >
                    {/* Clickable title → navigate to project page */}
                    <h2
                        onClick={() => navigate(`/projects/${project.slug}`)}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-text-primary pixel-text leading-tight cursor-pointer hover:text-accent transition-colors duration-200"
                        title={`View ${project.title} details`}
                    >
                        {project.title}
                    </h2>

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
                        <h3 className="text-xs sm:text-sm font-bold text-text-primary mb-1.5 sm:mb-2 uppercase tracking-wide">Description</h3>
                        <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Key Technical Features */}
                    <div className="mb-3 sm:mb-4 md:mb-5">
                        <h3 className="text-xs sm:text-sm font-bold text-text-primary mb-1.5 sm:mb-2 md:mb-3 uppercase tracking-wide">Key Technical Features</h3>
                        <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-xs sm:text-sm text-text-secondary max-h-28 sm:max-h-36 md:max-h-44 lg:max-h-48 overflow-y-auto pr-2">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-accent mr-1.5 sm:mr-2 mt-0.5 text-sm sm:text-base pixel-bullet flex-shrink-0">▪</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links row: external links + "Details" CTA */}
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
    );
};

// ─── Home (Slideshow) ─────────────────────────────────────────────────────────
function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = PROJECTS.length + 1;

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    const goToSlide = (index) => setCurrentSlide(index);

    return (
        <div className="relative h-screen overflow-hidden">
            <FloatingPixelDecorations />

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="fixed left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 md:p-4 bg-bg-secondary border-2 sm:border-3 md:border-4 border-border rounded-lg shadow-card hover:shadow-card-hover transition-all hover:bg-accent hover:text-white hover:border-accent pixel-nav"
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </button>

            <button
                onClick={nextSlide}
                className="fixed right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 md:p-4 bg-bg-secondary border-2 sm:border-3 md:border-4 border-border rounded-lg shadow-card hover:shadow-card-hover transition-all hover:bg-accent hover:text-white hover:border-accent pixel-nav"
                aria-label="Next slide"
            >
                <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </button>

            {/* Slide Indicators */}
            <div className="fixed bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-2 sm:gap-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all border-2 pixel-indicator ${currentSlide === index
                            ? 'bg-accent w-8 sm:w-10 md:w-12 border-accent'
                            : 'bg-border w-2 sm:w-2.5 md:w-3 border-border hover:bg-text-secondary hover:border-text-secondary'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="h-full overflow-y-auto"
                >
                    {currentSlide === 0 ? (
                        <IntroSlide />
                    ) : (
                        <ProjectSlide project={PROJECTS[currentSlide - 1]} />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

// ─── App Root with Router ─────────────────────────────────────────────────────
function App() {
    return (
        <BrowserRouter basename="/Bufolio">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
