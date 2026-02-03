import { ArrowRight } from 'lucide-react';
import styles from '../app/page.module.css';

export const CtaSection = () => {
    return (
        <section id="contact" className={styles.ctaSection}>
            <div className={styles.ctaContent}>
                <h2>Ready to upgrade your visuals?</h2>
                <p>Join leading dealerships and retailers transforming their catalogs with AI.</p>
                <div className={styles.ctaActions}>
                    <button className="btn btn-primary btn-lg">
                        Get Started Free
                        <ArrowRight size={20} style={{ marginLeft: 8 }} />
                    </button>
                    <button className="btn btn-secondary btn-lg">Contact Sales</button>
                </div>
            </div>
        </section>
    );
};
