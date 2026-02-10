import React, { useState } from 'react';
import { Github, Mail, ChevronLeft, ChevronRight, Play, ExternalLink, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingPixelDecorations } from './components/PixelDecorations';

// Import images
import unityButilitiesImg from './assets/unity-butilities.png';
import colorSorting3dImg from './assets/colorsorting3d.png';
import memeBrickBreakerImg from './assets/memebrickbreaker.png';
import spaceshipRunnerImg from './assets/spaceship-runner.png';
import trashSlayerImg from './assets/trashslayer.png';

// Project Data - Using exact content provided by user
const PROJECTS = [
    {
        title: "Unity-Butilities",
        description: "Unity-Butilities is a personal collection of utility packages I developed during my learning journey with Unity. The project focuses on creating reusable modules and tools to help handle common development tasks more smoothly. Most of the logic is built to be simple, modular, and easy to integrate into different game projects.",
        features: [
            "Editor Tooling: Developed custom windows and IMGUI utilities using Unity's Editor APIs, with a clear understanding of the Editor lifecycle.",
            "Static Analysis: Implemented C# Roslyn Analyzers to provide compile-time validation and warnings. Custom attributes are checked to ensure correct usage (e.g., data keys), helping maintain code quality and consistency."
        ],
        tags: ["ToolProject", "PersonalProject"],
        coverImage: unityButilitiesImg,
        links: {
            github: "https://github.com/buzlc2k/unity-butilities"
        }
    },
    {
        title: "ColorSorting3D",
        description: "ColorSorting3D is a classic 3D puzzle game where players sort colored rings into their respective containers. This project serves as a practical implementation of the MVVM architecture and Reactive Programming to create a highly scalable and decoupled UI system in Unity.",
        features: [
            "MVVM Architecture: Strict separation between Views and ViewModels. UI logic is fully decoupled from visual components and animations.",
            "Reactive Programming: Uses the R3 library for data binding and event streams, allowing the UI to react automatically to changes in game state without tight coupling."
        ],
        tags: ["GameProject", "PersonalProject"],
        coverImage: colorSorting3dImg,
        links: {
            github: "https://github.com/buzlc2k/ColorSorting3D",
            video: "https://www.youtube.com/watch?v=XOHn4ViScec"
        }
    },
    {
        title: "MemeBrickBreaker",
        description: "MemeBrickBreaker is a modernized take on the classic arcade genre, featuring ball-and-paddle mechanics infused with vibrant meme-inspired aesthetics. Players navigate through diverse levels, utilizing unique power-ups and strategic bounces to clear complex block formations. The project focuses on high-performance physics and extensible editor tools to deliver a polished and engaging mobile gaming experience.",
        features: [
            "Custom Physics System: Implemented a grid-based spatial partitioning system for collision detection. Objects are registered into grid cells to efficiently handle a large number of interactions while maintaining stable performance on mobile.",
            "Level Editor: Built an in-engine editor with Save/Load support and a Procedural Item Generator. Pathfinding algorithms are used to distribute items along calculated routes, reducing manual level design effort.",
            "Audio System: Modular audio architecture using ScriptableObjects and pooled Audio Emitters. Supports batched playback and layered sound effects with minimal overhead.",
            "Data System: A scalable data architecture that simplifies data managemen and ensures long-term maintainability with cloud synchronization.",
            "Responsive UI & World Scaling: Implemented resolution-independent UI and adaptive world scaling to ensure consistent visuals and gameplay across screen sizes and aspect ratios.",
            "Leaderboard: Integrated Firebase Realtime Database for global, real-time rankings across platforms."
        ],
        tags: ["GameProject", "PersonalProject"],
        coverImage: memeBrickBreakerImg,
        links: {
            github: "https://github.com/buzlc2k/MemeBrickBreaker",
            video: "https://www.youtube.com/watch?v=ED99VUY_oYE"
        }
    },
    {
        title: "SpaceShip Runner!",
        description: "SpaceShipRunner is my first mobile game created using Unity3D. In the game, you control a spaceship gliding down a path filled with obstacles of various shapes and colors. Through this project, I aim to learn more about object-oriented programming, fundamental graphic techniques and the process of publishing a game on Google Play.",
        features: [
            "Data Storage: Utilizes JSON format and Save Game package for saving and loading game data.",
            "Color System: Custom shader supports Linear and Gamma color modes. Global Shader Properties are used to control colors across multiple objects via script.",
            "Monetization Integration: Integrated ironSource SDK for ad display and In-App Purchase (IAP) items.",
        ],
        tags: ["GameProject", "PersonalProject"],
        coverImage: spaceshipRunnerImg,
        links: {
            github: "https://github.com/buzlc2k/SpaceShipRunner",
            video: "https://www.youtube.com/watch?v=6F6I3b2xLMk",
            download: "https://drive.google.com/drive/folders/1SoMJf6RK0WB2Kl32XxtFi_RUsGT8yzUZ"
        }
    },
    {
        title: "ET - TrashSlayer",
        description: "This is a game I developed for the club's project. Inspired from Vampire Survival. Players will take on the role of Em Tun (ET) to explore polluted places in the city to clean up trash, helping the trash monsters here no longer rebel.",
        features: [
            "Pattern System: Includes modular Bullet, Movement, and Effect Patterns for flexible and reusable gameplay behaviors.",
            "Enemy AI Movement: Utilizes the A* Pathfinding Project. Combines techniques like Pac-Man ghost's rule, runtime graph updates, and Separation rule from the Boid algorithm to prevent AI Enemy clumping together.",
            "Spawn System: Supports spawning objects based on various map layouts and shapes.",
            "Cutscenes: Created using Unity's Timeline to build in-game cinematic sequences.",
        ],
        tags: ["GameProject", "PersonalProject"],
        coverImage: trashSlayerImg,
        links: {
            github: "https://github.com/buzlc2k/ET_TrashSlayer",
            video: "https://www.youtube.com/watch?v=Fl9TOACxcHY",
            download: "https://buzlc2kz.itch.io/et-trashslayer"
        }
    }
];

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = PROJECTS.length + 1;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Intro Slide
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
                    A Fresher Unity Developer graduated from the University of Economics Ho Chi Minh City, majoring in Management Information Systems, with 6 months of hands-on experience in mobile game development using Unity (C#). I am particularly interested in contributing to hybrid or mid-core mobile game projects, where I can continuously improve my technical and problem-solving skills.
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

    // Project Slide
    const ProjectSlide = ({ project }) => (
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
                    <div className="aspect-video rounded-lg overflow-hidden border-3 sm:border-4 border-border bg-gray-100 shadow-card pixel-border">
                        <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.div>

                {/* Right: Content - Takes 2 columns (40%) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="order-1 lg:order-2 lg:col-span-2"
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-text-primary pixel-text leading-tight">
                        {project.title}
                    </h2>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6">
                        {project.tags.map((tag, i) => {
                            const isGameProject = tag === 'GameProject';
                            const isToolProject = tag === 'ToolProject';
                            const isPersonalProject = tag === 'PersonalProject';

                            let bgColor = '#00D9FF';      // Vibrant cyan
                            let borderColor = '#00A8CC';  // Darker cyan

                            if (isGameProject) {
                                bgColor = '#FF3366';      // Bold red-pink
                                borderColor = '#CC2952';  // Darker red-pink
                            } else if (isToolProject) {
                                bgColor = '#00E5A0';      // Vibrant teal
                                borderColor = '#00B880';  // Darker teal
                            } else if (isPersonalProject) {
                                bgColor = '#FFB800';      // Bold amber/gold
                                borderColor = '#CC9300';  // Darker amber
                            }

                            return (
                                <span
                                    key={i}
                                    className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-white font-bold pixel-tag`}
                                    style={{
                                        backgroundColor: bgColor,
                                        borderColor: borderColor
                                    }}
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
                    <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
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
    );

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Pixel Decorations */}
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

export default App;
