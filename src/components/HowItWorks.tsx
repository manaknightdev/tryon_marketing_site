import styles from '../app/page.module.css';

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className={styles.howItWorks}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>A complete creative toolkit</h2>
                <p className={styles.sectionSubtitle}>
                    Mix and match tools to solve your specific imagery challenges
                </p>
            </div>

            <div className={styles.stepsContainer}>
                <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                        <h3>Swap</h3>
                        <p>Remove messy backgrounds and transport products to studio settings or outdoor environments.</p>
                    </div>
                </div>

                <div className={styles.stepConnector} />

                <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                        <h3>Colorize</h3>
                        <p>Apply exact paint codes or fabric colors. Perfect for "See it in Blue" features on product pages.</p>
                    </div>
                </div>

                <div className={styles.stepConnector} />

                <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                        <h3>Fit</h3>
                        <p>For fashion retailers, let customers visualize garments on themselves or varied models.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
