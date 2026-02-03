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
                            <span>POST /api/v1/traion/background-change</span>
                        </li>
                        <li>
                            <CheckCircle2 size={18} />
                            <span>POST /api/v1/traion/color-change</span>
                        </li>
                        <li>
                            <CheckCircle2 size={18} />
                            <span>POST /api/v1/traion/try-on</span>
                        </li>
                    </ul>
                    <button className="btn btn-primary" style={{ display: 'none' }}>
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
                        <span>api-example.js</span>
                    </div>
                    <pre className={styles.codeBlock}>
                        {`// 1. Dealer Showroom Generation
const result = await api.post('/api/v1/traion/background-change', {
  product_image_url: 'https://dealer.com/inventory/bmw-x5.jpg',
  background_image_url: 'luxury-showroom-interior.jpg', // Environment
});

// 2. Generate Color Options
const variants = await api.post('/api/v1/traion/color-change', {
  product_image_url: result.url,
  color_code: '#1F2937' // Target Color / Texture
});`}
                    </pre>
                </div>
            </div>
        </section>
    );
};
