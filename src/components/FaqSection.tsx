import styles from '../app/page.module.css';

export const FaqSection = () => {
    return (
        <section className={styles.faqSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                <p className={styles.sectionSubtitle}>
                    Common questions about our AI workflows
                </p>
            </div>
            <div className={styles.faqGrid}>
                <div className={styles.faqCard}>
                    <h3>Does background swap work on complex objects?</h3>
                    <p>Yes, our semantic segmentation engine handles complex geometries like bicycle spokes, mesh chairs, and transparent glass with high precision.</p>
                </div>
                <div className={styles.faqCard}>
                    <h3>Can I use specific car paint codes?</h3>
                    <p>Absolutely. You can pass specific HEX or RGB codes to the <code>/color-change</code> endpoint to match manufacturer specs exactly.</p>
                </div>
                <div className={styles.faqCard}>
                    <h3>How fast is the processing?</h3>
                    <p>Most operations complete in 3-8 seconds depending on resolution. We offer elevated rate limits for enterprise plans to handle bulk processing.</p>
                </div>
                <div className={styles.faqCard}>
                    <h3>Do you offer a free trial?</h3>
                    <p>Yes, all new accounts start with 50 free credits so you can test the quality of Try-On, Recolor, and Background Swap before committing.</p>
                </div>
            </div>
        </section>
    );
};
