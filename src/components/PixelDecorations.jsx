import React from 'react';
import { motion } from 'framer-motion';

// Pixel Star Component
export const PixelStar = ({ size = 16, color = "#FFD700", className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className={`pixel-element ${className}`}
        style={{
            width: size,
            height: size,
            position: 'relative',
        }}
    >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pixel star shape */}
            <rect x="7" y="0" width="2" height="2" fill={color} />
            <rect x="6" y="2" width="4" height="2" fill={color} />
            <rect x="5" y="4" width="6" height="2" fill={color} />
            <rect x="4" y="6" width="8" height="2" fill={color} />
            <rect x="0" y="7" width="16" height="2" fill={color} />
            <rect x="4" y="8" width="8" height="2" fill={color} />
            <rect x="5" y="10" width="6" height="2" fill={color} />
            <rect x="6" y="12" width="4" height="2" fill={color} />
            <rect x="7" y="14" width="2" height="2" fill={color} />
        </svg>
    </motion.div>
);

// Pixel Heart Component
export const PixelHeart = ({ size = 16, color = "#FF6B6B", className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className={`pixel-element ${className}`}
        style={{
            width: size,
            height: size,
            position: 'relative',
        }}
    >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pixel heart shape */}
            <rect x="2" y="2" width="2" height="2" fill={color} />
            <rect x="4" y="2" width="2" height="2" fill={color} />
            <rect x="8" y="2" width="2" height="2" fill={color} />
            <rect x="10" y="2" width="2" height="2" fill={color} />
            <rect x="0" y="4" width="14" height="2" fill={color} />
            <rect x="0" y="6" width="14" height="2" fill={color} />
            <rect x="2" y="8" width="10" height="2" fill={color} />
            <rect x="4" y="10" width="6" height="2" fill={color} />
            <rect x="6" y="12" width="2" height="2" fill={color} />
        </svg>
    </motion.div>
);

// Pixel Block Component
export const PixelBlock = ({ size = 16, color = "#4A90E2", className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`pixel-element ${className}`}
        style={{
            width: size,
            height: size,
            position: 'relative',
        }}
    >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pixel block with 3D effect */}
            <rect x="0" y="0" width="16" height="16" fill={color} />
            <rect x="0" y="0" width="16" height="4" fill={color} fillOpacity="0.3" />
            <rect x="0" y="0" width="4" height="16" fill={color} fillOpacity="0.3" />
            <rect x="12" y="0" width="4" height="16" fill="#000" fillOpacity="0.2" />
            <rect x="0" y="12" width="16" height="4" fill="#000" fillOpacity="0.2" />
        </svg>
    </motion.div>
);

// Pixel Diamond Component
export const PixelDiamond = ({ size = 16, color = "#4ECDC4", className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className={`pixel-element ${className}`}
        style={{
            width: size,
            height: size,
            position: 'relative',
        }}
    >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pixel diamond shape */}
            <rect x="7" y="0" width="2" height="2" fill={color} />
            <rect x="5" y="2" width="6" height="2" fill={color} />
            <rect x="3" y="4" width="10" height="2" fill={color} />
            <rect x="1" y="6" width="14" height="2" fill={color} />
            <rect x="3" y="8" width="10" height="2" fill={color} />
            <rect x="5" y="10" width="6" height="2" fill={color} />
            <rect x="7" y="12" width="2" height="2" fill={color} />
        </svg>
    </motion.div>
);

// Pixel Plus Component
export const PixelPlus = ({ size = 16, color = "#FFA500", className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`pixel-element ${className}`}
        style={{
            width: size,
            height: size,
            position: 'relative',
        }}
    >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pixel plus shape */}
            <rect x="6" y="0" width="4" height="16" fill={color} />
            <rect x="0" y="6" width="16" height="4" fill={color} />
        </svg>
    </motion.div>
);

// Floating Pixel Decorations Container
export const FloatingPixelDecorations = () => {
    const decorations = [
        // Top left area - All white for minimalist look
        { Component: PixelStar, top: '10%', left: '5%', size: 24, delay: 0.1, animation: 'animate-float', color: '#FFFFFF' },
        { Component: PixelHeart, top: '15%', left: '8%', size: 20, delay: 0.3, animation: 'animate-pulse-slow', color: '#FFFFFF' },
        { Component: PixelBlock, top: '25%', left: '3%', size: 18, delay: 0.5, animation: 'animate-float', color: '#FFFFFF' },

        // Top right area
        { Component: PixelDiamond, top: '12%', right: '6%', size: 22, delay: 0.2, animation: 'animate-pulse-slow', color: '#FFFFFF' },
        { Component: PixelPlus, top: '20%', right: '4%', size: 20, delay: 0.4, animation: 'animate-float', color: '#FFFFFF' },
        { Component: PixelStar, top: '8%', right: '10%', size: 18, delay: 0.6, animation: 'animate-pulse-slow', color: '#FFFFFF' },

        // Bottom left area
        { Component: PixelPlus, bottom: '15%', left: '7%', size: 20, delay: 0.7, animation: 'animate-float', color: '#FFFFFF' },
        { Component: PixelDiamond, bottom: '25%', left: '4%', size: 24, delay: 0.8, animation: 'animate-pulse-slow', color: '#FFFFFF' },

        // Bottom right area
        { Component: PixelHeart, bottom: '18%', right: '8%', size: 22, delay: 0.9, animation: 'animate-float', color: '#FFFFFF' },
        { Component: PixelBlock, bottom: '10%', right: '5%', size: 20, delay: 1.0, animation: 'animate-pulse-slow', color: '#FFFFFF' },

        // Middle decorations
        { Component: PixelStar, top: '45%', left: '2%', size: 16, delay: 1.1, animation: 'animate-pulse-slow', color: '#FFFFFF' },
        { Component: PixelStar, top: '55%', right: '3%', size: 16, delay: 1.2, animation: 'animate-float', color: '#FFFFFF' },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {decorations.map((deco, index) => {
                const { Component, animation, color, ...style } = deco;
                return (
                    <div
                        key={index}
                        className={`absolute ${animation}`}
                        style={{
                            top: style.top,
                            bottom: style.bottom,
                            left: style.left,
                            right: style.right,
                            opacity: 0.15,  // Reduced opacity for white decorations
                        }}
                    >
                        <Component size={style.size} delay={style.delay} color={color} />
                    </div>
                );
            })}
        </div>
    );
};

// Corner Decorations (like in the reference image)
export const CornerDecorations = () => {
    return (
        <>
            {/* Top Left Corner */}
            <div className="fixed top-4 left-4 z-0 pointer-events-none opacity-30">
                <div className="flex gap-2">
                    <PixelBlock size={12} color="#00D9FF" />
                    <PixelBlock size={12} color="#FF3366" />
                    <PixelBlock size={12} color="#00E5A0" />
                </div>
                <div className="flex gap-2 mt-2">
                    <PixelBlock size={12} color="#FFB800" />
                    <PixelBlock size={12} color="#00D9FF" />
                </div>
            </div>

            {/* Top Right Corner */}
            <div className="fixed top-4 right-4 z-0 pointer-events-none opacity-30">
                <div className="flex gap-2 justify-end">
                    <PixelBlock size={12} color="#00E5A0" />
                    <PixelBlock size={12} color="#FF3366" />
                    <PixelBlock size={12} color="#00D9FF" />
                </div>
                <div className="flex gap-2 mt-2 justify-end">
                    <PixelBlock size={12} color="#00D9FF" />
                    <PixelBlock size={12} color="#FFB800" />
                </div>
            </div>

            {/* Bottom Left Corner */}
            <div className="fixed bottom-20 left-4 z-0 pointer-events-none opacity-30">
                <div className="flex gap-2">
                    <PixelBlock size={12} color="#FFB800" />
                    <PixelBlock size={12} color="#00E5A0" />
                </div>
                <div className="flex gap-2 mt-2">
                    <PixelBlock size={12} color="#00D9FF" />
                    <PixelBlock size={12} color="#FF3366" />
                    <PixelBlock size={12} color="#00E5A0" />
                </div>
            </div>

            {/* Bottom Right Corner */}
            <div className="fixed bottom-20 right-4 z-0 pointer-events-none opacity-30">
                <div className="flex gap-2 justify-end">
                    <PixelBlock size={12} color="#00E5A0" />
                    <PixelBlock size={12} color="#FFB800" />
                </div>
                <div className="flex gap-2 mt-2 justify-end">
                    <PixelBlock size={12} color="#00E5A0" />
                    <PixelBlock size={12} color="#FF3366" />
                    <PixelBlock size={12} color="#00D9FF" />
                </div>
            </div>
        </>
    );
};

export default FloatingPixelDecorations;
