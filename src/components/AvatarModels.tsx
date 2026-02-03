'use client';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react';
import styles from '../app/page.module.css';
import { TryonAvatar, TryonResult } from '@/assets/images';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const originalModels = [
    {
        name: 'Ava',
        vibe: 'Editorial',
        detail: 'Studio-lit with soft shadows and balanced skin tones.',
        image: TryonAvatar
    },
    {
        name: 'Noor',
        vibe: 'Street',
        detail: 'Urban daylight look with crisp textile definition.',
        image: TryonResult
    },
    {
        name: 'Sage',
        vibe: 'Athleisure',
        detail: 'Natural light, motion-ready styling, neutral palette.',
        image: TryonAvatar
    },
    {
        name: 'Milo',
        vibe: 'Minimal',
        detail: 'Soft contrast and neutral tones for clean product focus.',
        image: TryonResult
    },
    {
        name: 'Luna',
        vibe: 'Runway',
        detail: 'High contrast look with crisp edge definition.',
        image: TryonAvatar
    }
];

// Create a tripled list for infinite scrolling
const models = [...originalModels, ...originalModels, ...originalModels];

export const AvatarModels = () => {
    // Start in the middle set
    const [activeIndex, setActiveIndex] = useState(originalModels.length);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scrollToActive = useCallback((index: number, smooth: boolean = true) => {
        const container = carouselRef.current;
        if (!container) return;

        const item = container.querySelector<HTMLDivElement>(`[data-avatar-index="${index}"]`);
        if (item) {
            // Center the item
            const left = item.offsetLeft - (container.clientWidth - item.clientWidth) / 2;
            container.scrollTo({ left, behavior: smooth ? 'smooth' : 'instant' });
        }
    }, []);

    const handleNext = useCallback(() => {
        if (isTransitioning || isResetting) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => prev + 1);
    }, [isTransitioning, isResetting]);

    const handlePrev = useCallback(() => {
        if (isTransitioning || isResetting) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => prev - 1);
    }, [isTransitioning, isResetting]);

    // Handle initial positioning
    useEffect(() => {
        scrollToActive(activeIndex, false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Effect to handle normal scroll and transitions
    useEffect(() => {
        // If we are resetting, do NOT scroll here (handled in useLayoutEffect with instant behavior)
        if (isResetting) return;

        scrollToActive(activeIndex, true);

        // If we are transitioning, wait for it to finish then check boundaries
        if (isTransitioning) {
            const timer = setTimeout(() => {
                let newIndex = activeIndex;
                let needsReset = false;

                if (activeIndex >= originalModels.length * 2) {
                    newIndex = activeIndex - originalModels.length;
                    needsReset = true;
                } else if (activeIndex < originalModels.length) {
                    newIndex = activeIndex + originalModels.length;
                    needsReset = true;
                }

                if (needsReset) {
                    // Trigger reset: disable animations and jump index
                    setIsResetting(true);
                    setActiveIndex(newIndex);
                    // isTransitioning stays true until reset is complete to block input? 
                    // Or we can toggle it off after reset.
                }
                setIsTransitioning(false);
            }, 600); // Duration matches CSS transition
            return () => clearTimeout(timer);
        }
    }, [activeIndex, isTransitioning, isResetting, scrollToActive]);

    // Layout effect to handle the INSTANT snap when resetting
    useLayoutEffect(() => {
        if (isResetting) {
            // Instant scroll to the new index
            scrollToActive(activeIndex, false);

            // Re-enable transitions after a tiny delay to ensure simple paint
            requestAnimationFrame(() => {
                // A double RAF or small timeout is often safer for CSS transitions to re-engage
                setTimeout(() => {
                    setIsResetting(false);
                }, 50);
            });
        }
    }, [isResetting, activeIndex, scrollToActive]);

    // Auto-play
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 4000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [handleNext]);

    return (
        <section className={styles.avatarSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Our AI Avatar Models</h2>
            </div>

            <div className={styles.avatarCarouselWrap}>
                <div className={styles.avatarCarousel} ref={carouselRef}>
                    <div className={styles.avatarTrack}>
                        {models.map((model, i) => {
                            const isActive = i === activeIndex;
                            return (
                                <article
                                    key={`${model.name}-${i}`}
                                    data-avatar-index={i}
                                    className={`${styles.avatarCard} ${styles.avatarCardCarousel} ${isActive ? styles.avatarCardActive : ''}`}
                                    style={{
                                        transition: isResetting ? 'none' : undefined
                                    }}
                                    onClick={() => {
                                        if (i !== activeIndex && !isTransitioning) {
                                            setActiveIndex(i);
                                            setIsTransitioning(true);
                                        }
                                    }}
                                >
                                    <div className={styles.avatarImageFrame}>
                                        <Image
                                            src={model.image}
                                            alt={`${model.name} avatar model`}
                                            fill
                                            sizes="(max-width: 900px) 80vw, 40vw"
                                            className={styles.avatarImage}
                                        />
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.avatarControls}>
                    <button
                        className={styles.avatarArrow}
                        onClick={handlePrev}
                        aria-label="Previous avatar"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div className={styles.avatarDots}>
                        {originalModels.map((model, index) => {
                            const realActiveIndex = activeIndex % originalModels.length;
                            return (
                                <button
                                    key={model.name}
                                    type="button"
                                    aria-label={`Show ${model.name}`}
                                    onClick={() => {
                                        if (isTransitioning) return;
                                        // When clicking dot, jump to the 'middle' set version
                                        setActiveIndex(originalModels.length + index);
                                        setIsTransitioning(true);
                                    }}
                                    className={`${styles.avatarDot} ${index === realActiveIndex ? styles.avatarDotActive : ''}`}
                                />
                            );
                        })}
                    </div>

                    <button
                        className={styles.avatarArrow}
                        onClick={handleNext}
                        aria-label="Next avatar"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};
