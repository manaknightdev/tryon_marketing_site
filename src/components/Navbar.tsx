'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from '../app/page.module.css';
import { TryonLogo } from '@/assets/images';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={TryonLogo}
                        alt="AI Studio Logo"
                        width={32}
                        height={32}
                        className={styles.brandLogo}
                    />
                    <span className={styles.logoText}>Traion Studio</span>
                </Link>

                {/* Desktop Links */}
                <div className={styles.navLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/#how-it-works">How It Works</Link>
                    <Link href="/#api">API</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/#faq">FAQ</Link>
                </div>

                <div className={styles.navActions}>
                    <button className={styles.signIn}>Sign in</button>
                    <button className={`${styles.signIn} ${styles.primaryBtn}`}>Get Started</button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.mobileMenuToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenuOverlay}>
                    <div className={styles.mobileMenuLinks}>
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
                        <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                        <Link href="/#api" onClick={() => setIsMobileMenuOpen(false)}>API</Link>
                        <Link href="/#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                        <Link href="/sustainability" onClick={() => setIsMobileMenuOpen(false)}>Sustainability</Link>
                        <hr className={styles.mobileDivider} />
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Sign in</Link>
                        <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#8b5cf6' }}>Get Started</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
