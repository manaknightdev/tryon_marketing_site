import Link from 'next/link';
import styles from '../inner-page.module.css';
import pricingStyles from './pricing.module.css';
import { Navbar, Footer } from '@/components';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || '#';

const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29.99,
    description: 'For individuals and small projects.',
    features: [
      '50 impressions per month',
      'All API access',
      'Standard support',
    ],
    badge: undefined,
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 59.99,
    description: 'For growing teams and higher volume.',
    features: [
      '150 impressions per month',
      'All API access',
      'Priority support',
    ],
    badge: 'Most popular',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99.99,
    description: 'For large teams and maximum capacity.',
    features: [
      '300 impressions per month',
      'All API access',
      'Dedicated support',
    ],
    badge: undefined,
    highlighted: false,
  },
] as const;

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <main className={styles.page}>
        <header className={styles.pageHeader}>
          <span className={styles.pageEyebrow}>Pricing</span>
          <h1 className={styles.pageTitle}>Tryon plan pricing</h1>
          <p className={styles.pageSubtitle}>
            Choose the plan that fits your usage, then get started in the app.
          </p>
        </header>

        <section className={styles.pageSection}>
          <div className={pricingStyles.pricingSection}>
            <div className={pricingStyles.pricingGrid}>
              {PLANS.map((plan) => (
                <article
                  key={plan.id}
                  className={`${pricingStyles.card} ${plan.highlighted ? pricingStyles.cardPopular : ''}`}
                >
                  {plan.highlighted && plan.badge && (
                    <span className={pricingStyles.popularBadge}>{plan.badge}</span>
                  )}
                  <h2 className={pricingStyles.cardTitle}>{plan.name}</h2>
                  <p className={pricingStyles.cardDescription}>{plan.description}</p>
                  <div className={pricingStyles.priceWrap}>
                    <span className={pricingStyles.priceAmount}>${plan.price.toFixed(2)}</span>
                    <span className={pricingStyles.pricePeriod}>/month</span>
                  </div>
                  <ul className={pricingStyles.featureList}>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link
                    href={APP_URL}
                    className={`${pricingStyles.cardCta} ${plan.highlighted ? pricingStyles.cardCtaPrimary : pricingStyles.cardCtaSecondary}`}
                  >
                    Get started
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
