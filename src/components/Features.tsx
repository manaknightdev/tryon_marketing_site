import { CarFront, Box, Shirt, Code2 } from 'lucide-react';
import styles from '../app/page.module.css';

export const Features = () => {
    return (
        <section id="solutions" className={styles.features}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Built for complex visual demands</h2>
                <p className={styles.sectionSubtitle}>
                    Specialized AI models for automotive, e-commerce, and fashion retail.
                </p>
            </div>

            <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                    <div className={styles.featureIcon} style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)' }}>
                        <CarFront size={24} />
                    </div>
                    <h3>Automotive Marketing</h3>
                    <p>Place inventory in professional showrooms instantly. Recolor vehicles to show all factory options without new photoshoots.</p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.featureIcon} style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}>
                        <Box size={24} />
                    </div>
                    <h3>Product Photography</h3>
                    <p>Perfect for CPG and furniture. Swap plain backgrounds for lifestyle scenes. Keep original lighting and shadows for realism.</p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.featureIcon} style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' }}>
                        <Shirt size={24} />
                    </div>
                    <h3>Virtual Try-On</h3>
                    <p>The industry-leading model for fashion. Realistic garment draping and fitting on diverse human models.</p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.featureIcon} style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}>
                        <Code2 size={24} />
                    </div>
                    <h3>Enterprise API</h3>
                    <p>Scale your operations with high-throughput endpoints. Process thousands of SKUs automatically via our REST API.</p>
                </div>
            </div>
        </section>
    );
};
