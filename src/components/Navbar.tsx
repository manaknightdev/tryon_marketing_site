import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/page.module.css';
import { TryonLogo } from '@/assets/images';

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <div className={styles.logo}>
                    <Image
                        src={TryonLogo}
                        alt="AI Studio Logo"
                        width={36}
                        height={36}
                        className={styles.brandLogo}
                    />
                    <span className={styles.logoText}>Tryon Studio</span>
                </div>
                <div className={styles.navLinks}>
                    <Link href="#solutions">Solutions</Link>
                    <Link href="#how-it-works">How it Works</Link>
                    <Link href="#api">API</Link>
                    <Link href="#pricing">Pricing</Link>
                </div>
                <div className={styles.navActions}>
                    <button className={styles.signIn}>Sign in</button>
                    <button className={`${styles.signIn} ${styles.primaryBtn}`}>Get Started</button>
                </div>
            </div>
        </nav>
    );
};
