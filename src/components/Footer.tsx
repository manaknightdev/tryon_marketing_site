import Link from 'next/link';
import Image from 'next/image';
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
                        <span className={styles.logoText}>Tryon Studio</span>
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
                        <Link href="#">About</Link>
                        <Link href="#">Customers</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">Privacy</Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <span>© 2025 Tryon Studio. All rights reserved.</span>
            </div>
        </footer>
    );
};
