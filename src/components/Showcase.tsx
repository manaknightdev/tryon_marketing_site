'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CarFront,
    MousePointer2,
    Image as ImageIcon,
    Wand2,
    PaintBucket,
    User,
    Shirt,
    Sparkles,
    Layers,
    ArrowRight,
    CheckCircle2,
    Download,
    Plus,
    Terminal,
    ScanFace
} from 'lucide-react';
import { BackgroundChangeResult, BackgroundImage, CarImage, TryonAvatar, TryonGarment, TryonResult, ColorChangeResult, ColorChangeImage, ColorImage } from '@/assets/images';
import styles from '../app/page.module.css';

// -----------------------------------------------------------------------------
// REUSABLE IMMERSIVE LAYOUT
// -----------------------------------------------------------------------------

interface ImmersiveLayoutProps {
    title: string;
    subtitle: string;
    processText: string;
    accentColor: string;
    input1: { label: string; icon: any; image: any; cursor?: { label: string; color: string; x: number; y: number } };
    input2: { label: string; icon: any; image: any; cursor?: { label: string; color: string; x: number; y: number } };
    result: { label: string; image: any };
}

const ImmersiveLayout = ({ title, subtitle, processText, accentColor, input1, input2, result }: ImmersiveLayoutProps) => {
    return (
        <div className={styles.immersiveGrid}>

            {/* LEFT COLUMN - INPUTS */}
            <div className={styles.immersiveLeftCol}>
                {/* Input 1 (Top) */}
                <motion.div
                    className={styles.inputCard}
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                >
                    <div className={styles.cardLabel}>
                        <input1.icon size={14} color={accentColor} />
                        <span>{input1.label}</span>
                    </div>
                    <div className={`${styles.cardImageContainer} ${styles.cardImageContainerContain}`} style={{ aspectRatio: '3/4' }}>
                        <img src={typeof input1.image === 'string' ? input1.image : input1.image.src} alt={input1.label} className={styles.cardImage} />
                        {/* Interactive Plus Button */}
                        <div className={styles.plusButton} style={{ top: -10, right: -10 }}>
                            <Plus size={14} />
                        </div>
                    </div>
                </motion.div>

                {/* Input 2 (Bottom) */}
                <motion.div
                    className={styles.inputCard}
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "circOut" }}
                >
                    <div className={styles.cardLabel}>
                        <input2.icon size={14} color={accentColor} />
                        <span>{input2.label}</span>
                    </div>
                    <div className={styles.cardImageContainer} style={{ aspectRatio: '4/3' }}>
                        <img src={typeof input2.image === 'string' ? input2.image : input2.image.src} alt={input2.label} className={styles.cardImage} />
                    </div>
                    {/* Floating Cursor (if exists) */}
                    {input2.cursor && (
                        <motion.div
                            className={styles.floatingCursor}
                            style={{ top: input2.cursor.y, left: input2.cursor.x }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                        >
                            <MousePointer2 size={24} fill={input2.cursor.color} color={input2.cursor.color} />
                            <span className={styles.cursorLabel} style={{ backgroundColor: input2.cursor.color }}>{input2.cursor.label}</span>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* CENTER COLUMN - TEXT & PROCESS */}
            <div className={styles.immersiveCenterCol}>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className={styles.heroTitleBig} style={{ fontSize: 'clamp(48px, 6vw, 96px)' }}>
                        {title}
                    </h1>
                    <p className={styles.heroSubtitle}>
                        {subtitle}
                    </p>
                </motion.div>

                <motion.button
                    className={styles.primaryCta}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Try it now <ArrowRight size={16} />
                </motion.button>

                {/* Generation Process Box */}
                <motion.div
                    className={styles.processBox}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={styles.processTitle}>
                        <Terminal size={14} color={accentColor} />
                        <span>Generation Process</span>
                    </div>
                    <div className={styles.processText}>
                        <span style={{ color: accentColor }}>{">"}</span> {processText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            style={{ color: accentColor, marginLeft: 4 }}
                        >
                            _
                        </motion.span>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT COLUMN - RESULT */}
            <div className={styles.immersiveRightCol}>
                <motion.div
                    className={styles.resultCard}
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "circOut" }}
                    style={{ borderColor: `${accentColor}40` }}
                >
                    <div className={styles.cardLabel} style={{ justifyContent: 'space-between', width: '100%', marginBottom: 16 }}>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <CheckCircle2 size={16} color={accentColor} fill={`${accentColor}20`} />
                            <span style={{ color: 'white' }}>{result.label}</span>
                        </div>
                        <div className={styles.plusButton} style={{ position: 'static', width: 28, height: 28 }}>
                            <Download size={14} />
                        </div>
                    </div>

                    <div className={`${styles.resultImageContainer} ${styles.resultImageContainerDynamic}`}>
                        <motion.img
                            src={typeof result.image === 'string' ? result.image : result.image.src}
                            alt="Result"
                            className={styles.resultImage}
                            initial={{ scale: 1.1, filter: 'blur(10px)' }}
                            animate={{ scale: 1, filter: 'blur(0px)' }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                        {/* Scanning Line Effect */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                height: 2,
                                background: accentColor,
                                boxShadow: `0 0 20px ${accentColor}`,
                                zIndex: 10
                            }}
                            initial={{ top: '0%' }}
                            animate={{ top: '100%' }}
                            transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatDelay: 3 }}
                        />
                    </div>
                </motion.div>
            </div>

        </div>
    );
};


// -----------------------------------------------------------------------------
// MAIN SHOWCASE COMPONENT
// -----------------------------------------------------------------------------

export const Showcase = () => {
    // 0: Fashion, 1: Auto, 2: Recolor
    const [viewState, setViewState] = useState(0);

    // Auto-cycle through views
    useEffect(() => {
        const timer = setInterval(() => {
            setViewState((prev) => (prev + 1) % 3);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const views = [
        // VIEW 0: FASHION
        {
            title: "trAiOn",
            subtitle: "The ultimate virtual try-on engine. Visualize garments on any model instantly with photorealistic AI precision.",
            processText: "Analyzing target body pose and lighting conditions. Warping input garment texture [Beige Ribbed Sweater] to fit target mesh. Adjusting fabric drape, shadows, and occlusion. Rendering final photorealistic composite...",
            accentColor: "#8b5cf6", // Purple
            input1: {
                label: "Target Model",
                icon: User,
                image: TryonAvatar // Woman Model
            },
            input2: {
                label: "Garment Reference",
                icon: Shirt,
                image: TryonGarment, // White Shirt
                cursor: { label: "Sarah (Designer)", color: "#8b5cf6", x: -20, y: -20 }
            },
            result: {
                label: "Virtual Try-On Result",
                image: TryonResult // Model Wearing Shirt (Different Image)
            }
        },
        // VIEW 1: AUTOMOTIVE
        {
            title: "AutoBg",
            subtitle: "Contextual background replacement for automotive retail. Place vehicles in any environment instantly.",
            processText: "Segmenting vehicle foreground from source. Estimating lighting direction and reflections. Generating shadow maps for 'Showroom' environment. Blending glossy surfaces with new HDR map...",
            accentColor: "#3b82f6", // Blue
            input1: {
                label: "Original Vehicle",
                icon: CarFront,
                image: CarImage
            },
            input2: {
                label: "Target Environment",
                icon: ImageIcon,
                image: BackgroundImage, // Scenery
                cursor: { label: "Mike (Dealer)", color: "#3b82f6", x: 250, y: -10 }
            },
            result: {
                label: "Composite Shot",
                image: BackgroundChangeResult // Same car (simulated result)
            }
        },
        // VIEW 2: RECOLOR
        {
            title: "ReColor",
            subtitle: "Intelligent object recoloring. Change the color of any product or scene element while preserving texture and lighting.",
            processText: "Identifying material properties of target object. Generating color variants based on [Red Hex #FF0000]. Preserving specular highlights and ambient occlusion. Applying color transformation matrix...",
            accentColor: "#fF0000", // Red
            input1: {
                label: "Target Object",
                icon: Layers,
                image: ColorChangeImage 
            },
            input2: {
                label: "Color Selection",
                icon: PaintBucket,
                image: ColorImage, 
                cursor: { label: "Alex (Creative)", color: "#fF0000", x: 100, y: 30 }
            },
            result: {
                label: "Recolored Variant",
                image: ColorChangeResult // Green Nike Shoe (Variant)
            }
        }
    ];

    const currentView = views[viewState];

    return (
        <section className={styles.immersiveContainer}>
            {/* Background Glows specific to current view */}
            <motion.div
                className={styles.glowBackground}
                animate={{
                    background: `radial-gradient(circle at center, ${currentView.accentColor}10 0%, #000000 100%)`
                }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute', inset: 0, zIndex: 0 }}
            />

            {/* Content Switcher */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={viewState}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
                >
                    <ImmersiveLayout {...currentView} />
                </motion.div>
            </AnimatePresence>

            {/* Bottom Controls */}
            <div className={styles.showcaseControls}>
                <div className={styles.stepIndicators}>
                    {views.map((v, idx) => (
                        <button
                            key={idx}
                            onClick={() => setViewState(idx)}
                            className={`${styles.stepDot} ${viewState === idx ? styles.activeStep : ''}`}
                        >
                            <span>{v.title}</span>
                            {viewState === idx && (
                                <motion.div
                                    layoutId="active-pill"
                                    className={styles.activePill}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};
