import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import styles from '../app/page.module.css';
import { TryonLogo } from '@/assets/images';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerBrand}>
                    <div className={styles.logo}>
                        <Image
                            src={TryonLogo}
                            alt="AI Studio Logo"
                            width={32}
                            height={32}
                            className={styles.brandLogo}
                        />
                        <span className={styles.logoText}>Traion Studio</span>
                    </div>
                    <p>Visual intelligence for modern commerce.</p>
                </div>
                <div className={styles.footerLinks}>
                    <div className={styles.footerColumn}>
                        <h4>Solutions</h4>
                        <Link href="#">Automotive</Link>
                        <Link href="#">E-commerce</Link>
                        <Link href="#">Fashion</Link>
                        <Link href="#">Enterprise</Link>
                    </div>
                    <div className={styles.footerColumn}>
                        <h4>Platform</h4>
                        <Link href="#">Background Swap</Link>
                        <Link href="#">AI Recolor</Link>
                        <Link href="#">Virtual Try-On</Link>
                        <Link href="#">API Docs</Link>
                    </div>
                    <div className={styles.footerColumn}>
                        <h4>Company</h4>
                        <Link href="/sustainability">Sustainability</Link>
                        <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                        <Link href="/cancellation-policy">Cancellation Policy</Link>
                        <Link href="/#contact">Contact</Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <span>© 2025 Traion Studio. All rights reserved.</span>
                <div className={styles.footerSocials}>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <Instagram size={16} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin size={16} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                        <Twitter size={16} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                        <Youtube size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
