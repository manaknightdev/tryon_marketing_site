import { Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import styles from '../app/page.module.css';

export const ApiSection = () => {
    return (
        <section id="api" className={styles.apiSection}>
            <div className={styles.apiContent}>
                <div className={styles.apiInfo}>
                    <div className={styles.apiBadge}>
                        <Code2 size={14} />
                        <span>Unified API</span>
                    </div>
                    <h2>One API, Endless Generations</h2>
                    <p>
                        Integrate powerful image manipulation into your dealership system, e-commerce platform, or DAM.
                    </p>
                    <ul className={styles.apiFeatures}>
                        <li>
                            <CheckCircle2 size={18} />
                            <span>/background-change: Context aware scene generation</span>
                        </li>
                        <li>
                            <CheckCircle2 size={18} />
                            <span>/color-change: Preserves texture and lighting</span>
                        </li>
                        <li>
                            <CheckCircle2 size={18} />
                            <span>/try-on: Specialized fashion engine</span>
                        </li>
                    </ul>
                    <button className="btn btn-primary">
                        Read Documentation
                        <ArrowRight size={18} style={{ marginLeft: 8 }} />
                    </button>
                </div>
                <div className={styles.apiCode}>
                    <div className={styles.codeHeader}>
                        <div className={styles.codeDots}>
                            <span />
                            <span />
                            <span />
                        </div>
                        <span>automotive-example.js</span>
                    </div>
                    <pre className={styles.codeBlock}>
                        {`// 1. Dealer Showroom Generation
const result = await api.post('/background-change', {
  image: 'https://dealer.com/inventory/bmw-x5.jpg',
  background: 'luxury-showroom-interior.jpg',
  occupation: 85 // Feature car prominently
});

// 2. Generate Color Options
const variants = await api.post('/color-change', {
  image: result.url,
  color_code: '#1F2937' // Midnight Black
});`}
                    </pre>
                </div>
            </div>
        </section>
    );
};
