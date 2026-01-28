import styles from '../app/page.module.css';

export const TrustedBy = () => {
    return (
        <section className={styles.trustedBy}>
            <h2 className={styles.trustedTitle}>Trusted by</h2>
            <p className={styles.trustedSubtitle}>
                Over 6,000 creative teams, marketers, and leading global brands
            </p>

            <div className={styles.logoGrid}>
                {/* Placeholder Logos mimicking the clean aesthetic */}
                <div className={styles.brandLogoItem}>
                    <svg viewBox="0 0 100 30" fill="currentColor" height="24">
                        <path d="M10,15 L20,15 M15,10 L15,20" stroke="currentColor" strokeWidth="3" />
                        <text x="30" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18">GOOGLE</text>
                    </svg>
                </div>
                <div className={styles.brandLogoItem}>
                    <span style={{ fontFamily: 'serif', fontSize: 22, fontWeight: 700 }}>Ogilvy</span>
                </div>
                <div className={styles.brandLogoItem}>
                    <span style={{ fontFamily: 'sans-serif', fontSize: 20, fontWeight: 800 }}>nu</span>
                    <span style={{ fontFamily: 'sans-serif', fontSize: 20, fontWeight: 400 }}>bank</span>
                </div>
                <div className={styles.brandLogoItem}>
                    <span style={{ fontWeight: 800, fontSize: 18 }}>HELLO</span>
                    <br />
                    <span style={{ fontWeight: 800, fontSize: 18 }}>FRESH</span>
                </div>
                <div className={styles.brandLogoItem}>
                    <span style={{ fontFamily: 'cursive', fontSize: 24 }}>Coca-Cola</span>
                </div>
                <div className={styles.brandLogoItem}>
                    <span style={{ fontWeight: 600, fontSize: 20 }}>❄️ snowflake</span>
                </div>
            </div>
        </section>
    );
};
