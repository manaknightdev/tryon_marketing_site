import { CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import styles from '../app/page.module.css';

const advantages = [
    {
        title: 'Photorealistic by default',
        description: 'Maintain lighting, fabric texture, and true-to-life color with every generation.',
        icon: Sparkles
    },
    {
        title: 'Pipeline-ready outputs',
        description: 'Batch export in brand-safe formats built for PDPs, marketplaces, and showroom screens.',
        icon: Zap
    },
    {
        title: 'Brand control baked in',
        description: 'Lock pose, framing, and camera angle to keep entire catalogs consistent.',
        icon: ShieldCheck
    },
    {
        title: 'Measured time savings',
        description: 'Reduce reshoot cycles and cut production timelines without sacrificing quality.',
        icon: CheckCircle2
    }
];

export const Advantages = () => {
    return (
        <section className={styles.advantagesSection}>
            <div className={styles.sectionHeader}>
                {/* <p className={styles.sectionEyebrow}>Advantages of Traion</p> */}
                <h2 className={styles.sectionTitle}>Advantages of Traion</h2>
                {/* <p className={styles.sectionSubtitle}>
                    Built for teams that need speed, control, and polished visuals across every channel.
                </p> */}
            </div>

            <div className={styles.advantagesGrid}>
                {advantages.map((advantage) => (
                    <article key={advantage.title} className={styles.advantageCard}>
                        <div className={styles.advantageIcon}>
                            <advantage.icon size={18} />
                        </div>
                        <h3>{advantage.title}</h3>
                        <p>{advantage.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};
