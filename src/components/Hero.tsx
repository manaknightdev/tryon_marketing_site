import { Sparkles, ArrowRight, Play } from 'lucide-react';
import styles from '../app/page.module.css';

export const Hero = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.heroBadge}>
                <Sparkles size={14} />
                <span>Generative AI for Commerce</span>
            </div>
            <h1 className={styles.title}>
                Visual Intelligence for <br />
                <span className={styles.gradientText}>Every Product Vertical</span>
            </h1>
            <p className={styles.subtitle}>
                From fashion try-ons to automotive showcases. A unified API suite for transforming product imagery, swapping backgrounds, and creating infinite variants.
            </p>
            <div className={styles.heroActions}>
                <button className="btn btn-primary">
                    Start building
                    <ArrowRight size={18} style={{ marginLeft: 8 }} />
                </button>
                <button className="btn btn-secondary">
                    <Play size={16} style={{ marginRight: 8 }} />
                    View gallery
                </button>
            </div>
        </header>
    );
};
