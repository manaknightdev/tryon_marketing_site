import styles from '../inner-page.module.css';
import { Navbar, Footer } from '@/components';

export default function CancellationPolicyPage() {
  return (
    <div>
      <Navbar />
      <main className={styles.page}>
        <header className={styles.pageHeader}>
          <span className={styles.pageEyebrow}>Cancellation Policy</span>
          <h1 className={styles.pageTitle}>Manage or cancel your Traion plan</h1>
          <p className={styles.pageSubtitle}>
            We keep cancellations straightforward and provide clear timelines for plan changes.
          </p>
        </header>

        <section className={styles.pageSection}>
          <h2 className={styles.sectionTitle}>Monthly plans</h2>
          <div className={styles.legalList}>
            <span>Cancel anytime before your next billing date to avoid renewal charges.</span>
            <span>Unused credits expire at the end of your billing cycle.</span>
            <span>Downgrades take effect on the next billing period.</span>
          </div>
        </section>

        <section className={styles.pageSection}>
          <h2 className={styles.sectionTitle}>Annual agreements</h2>
          <div className={styles.legalList}>
            <span>Annual plans require a 30-day notice to cancel or revise seat counts.</span>
            <span>Enterprise agreements follow custom SLA and contract terms.</span>
          </div>
        </section>

        <div className={styles.noteBox}>
          Need assistance with cancellation or billing? Email our support team and we will respond within one business day.
        </div>
      </main>
      <Footer />
    </div>
  );
}
