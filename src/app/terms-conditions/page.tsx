import styles from '../inner-page.module.css';
import { Navbar, Footer } from '@/components';

export default function TermsPage() {
  return (
    <div>
      <Navbar />
      <main className={styles.page}>
        <header className={styles.pageHeader}>
          <span className={styles.pageEyebrow}>Terms &amp; Conditions</span>
          <h1 className={styles.pageTitle}>Usage terms for Traion Studio</h1>
          <p className={styles.pageSubtitle}>
            These terms outline acceptable use, licensing, and service commitments for Traion customers.
          </p>
        </header>

        <section className={styles.pageSection}>
          <h2 className={styles.sectionTitle}>Account &amp; access</h2>
          <div className={styles.legalList}>
            <span>Access is provided to approved users under your organization’s account.</span>
            <span>You are responsible for maintaining the security of API keys and credentials.</span>
            <span>We may suspend accounts in cases of misuse, fraud, or policy violations.</span>
          </div>
        </section>

        <section className={styles.pageSection}>
          <h2 className={styles.sectionTitle}>Content licensing</h2>
          <div className={styles.legalList}>
            <span>You retain ownership of source imagery and generated outputs.</span>
            <span>Traion may use anonymized metadata to improve model performance.</span>
            <span>Do not upload assets you do not own or have permission to use.</span>
          </div>
        </section>

        <section className={styles.pageSection}>
          <h2 className={styles.sectionTitle}>Service availability</h2>
          <div className={styles.legalList}>
            <span>We target 99.5% uptime across our production API endpoints.</span>
            <span>Planned maintenance windows are communicated in advance.</span>
            <span>Enterprise SLAs are available by contract.</span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
