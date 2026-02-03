import styles from '../inner-page.module.css';
import { Navbar, Footer } from '@/components';

export default function SustainabilityPage() {
  return (
    <div>
      <Navbar />
      <main className={styles.page}>
        <header className={styles.pageHeader}>
          <span className={styles.pageEyebrow}>Sustainability</span>
          <h1 className={styles.pageTitle}>Reducing waste in visual production</h1>
          <p className={styles.pageSubtitle}>
            Traion helps teams cut physical sampling, travel, and reshoots by digitizing imagery pipelines.
          </p>
        </header>

        <section className={styles.pageSection}>
          <h2 className={styles.sectionTitle}>Our impact focus</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h4>Lower sample production</h4>
              <p className={styles.sectionText}>
                Replace physical samples with digital try-ons to reduce material waste and shipping emissions.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h4>Efficient content creation</h4>
              <p className={styles.sectionText}>
                Generate seasonal variants without additional studio time, lighting, or travel.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h4>Smarter asset reuse</h4>
              <p className={styles.sectionText}>
                Recolor or re-contextualize existing imagery instead of reshooting for every channel.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h4>Responsible compute</h4>
              <p className={styles.sectionText}>
                We optimize inference workloads and work with partners focused on cleaner energy.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.pageSection}>
          <h2 className={styles.sectionTitle}>Partner commitments</h2>
          <p className={styles.sectionText}>
            We collaborate with vendors that prioritize energy-efficient infrastructure and transparent reporting.
            Contact us for documentation on data center locations, security standards, and ESG initiatives.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
