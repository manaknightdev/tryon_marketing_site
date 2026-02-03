import styles from '../app/page.module.css';

const testimonials = [
    {
        quote: 'We replaced two full-day shoots with Traion renders and kept every SKU on-brand.',
        name: 'Lena Park',
        role: 'Creative Director',
        company: 'Northline Retail'
    },
    {
        quote: 'The background swap accuracy is unreal. Dealers can update listings in minutes.',
        name: 'Marcus Chen',
        role: 'VP of Digital',
        company: 'AutoVista Group'
    },
    {
        quote: 'Our conversion rate jumped once shoppers could see real-time try-ons.',
        name: 'Sofia Alvarez',
        role: 'E-commerce Lead',
        company: 'Aurelia Apparel'
    }
];

export const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.sectionHeader}>
                <p className={styles.sectionEyebrow}>Testimonials</p>
                <h2 className={styles.sectionTitle}>Teams trust Traion to ship faster</h2>
                <p className={styles.sectionSubtitle}>
                    From fashion studios to automotive marketplaces, our customers scale their imagery with confidence.
                </p>
            </div>

            <div className={styles.testimonialsGrid}>
                {testimonials.map((testimonial) => (
                    <article key={testimonial.name} className={styles.testimonialCard}>
                        <p className={styles.testimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className={styles.testimonialMeta}>
                            <span>{testimonial.name}</span>
                            <span>{testimonial.role} · {testimonial.company}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
