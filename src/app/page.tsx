import styles from './page.module.css';
import {
  Navbar,
  Hero,
  TrustedBy,
  Showcase,
  Features,
  AvatarModels,
  Advantages,
  HowItWorks,
  ApiSection,
  FaqSection,
  Testimonials,
  CtaSection,
  Footer
} from '@/components';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Background Glows */}
      <div className={styles.glowBackground}>
        <div className={styles.glowPurple} />
        <div className={styles.glowBlue} />
        <div className={styles.glowGreen} />
      </div>

      <Navbar />
      <Showcase />
      <Hero />
      <TrustedBy />
      <Features />
      <AvatarModels />
      <Advantages />
      <HowItWorks />
      <ApiSection />
      <Testimonials />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
