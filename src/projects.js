// Import images
import unityButilitiesImg from './assets/unity-butilities.png';
import colorSorting3dImg from './assets/colorsorting3d.png';
import memeBrickBreakerImg from './assets/memebrickbreaker.png';
import spaceshipRunnerImg from './assets/spaceship-runner.png';
import trashSlayerImg from './assets/trashslayer.png';

const PROJECTS = [
    {
        slug: "unity-butilities",
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
        slug: "colorsorting3d",
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
        slug: "memebrickbreaker",
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
        slug: "spaceship-runner",
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
        slug: "et-trashslayer",
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

export default PROJECTS;
