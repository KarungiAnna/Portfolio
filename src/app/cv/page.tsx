import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './cv.module.css';
import sharedStyles from '@/components/CVShared.module.css';
import CVHeader from '@/components/CVHeader/CVHeader';
import CVSidebar from '@/components/CVSidebar/CVSidebar';
import CVExperienceItem from '@/components/CVExperienceItem/CVExperienceItem';

export const metadata: Metadata = {
  title: 'Karungi Anna — Curriculum Vitae',
  description: 'The CV of Karungi Anna',
  alternates: {
    types: {
      'application/pdf': '/api/cv/pdf',
    },
  },
};

export default function CVPage() {
  return (
    <div className={styles.cvWrapper}>
      <div className={styles.cvActions}>
        {/* We'll use window.print() but wrap it in an interactive client component? Wait, we can't use onClick in Server Component. */}
        {/* So I will decouple the print button to a small client component if needed, or simply render a classic button block. */}
        {/* For Next.js Server Components, we can just use an anchor pointing to the PDF or a client wrapper. */}
        <a href="/api/cv/pdf" target="_blank" rel="noreferrer" className={styles.actionBtn}>
          ⎙ Print / Save PDF
        </a>
        <Link href="/" className={styles.actionBtnSecondary}>
          ← Back to Portfolio
        </Link>
      </div>

      <div className={styles.cvPage}>
        <CVHeader />

        <div className={styles.cvBody}>
          <CVSidebar />

          <main className={styles.cvMain}>
            <div className={sharedStyles.cvSection}>
              <h3 className={sharedStyles.cvSectionTitle}>Professional Summary</h3>
              <p className={styles.summaryText}>
                Results-driven <em>Full-Stack Developer</em> with 3+ years of experience designing and building scalable web applications and digital products. Adept at bridging the gap between design and engineering, with a strong focus on performance, accessibility, and user experience. Thrives in remote-first environments, collaborating with distributed teams across multiple time zones to deliver impactful, well-crafted solutions.
              </p>
            </div>

            <div className={sharedStyles.cvDivider}><span className={sharedStyles.cvDividerOrnament}>✦</span></div>

            <div className={sharedStyles.cvSection}>
              <h3 className={sharedStyles.cvSectionTitle}>Work Experience</h3>

              <div style={{ paddingLeft: '2rem', position: 'relative' }}>
                <CVExperienceItem
                  role="Senior Frontend Developer"
                  duration="Jan 2024 — Present"
                  companyName="TechCorp Solutions"
                  companyUrl="https://techcorp.example.com"
                  companyDescription="Product studio building SaaS tools for SMBs across East Africa and beyond."
                  bullets={[
                    <span key="1">Architected and led the development of a new <strong>design system in React</strong>, reducing UI inconsistencies by 60% and cutting new feature development time by 25%.</span>,
                    <span key="2">Optimized Core Web Vitals for the flagship product, improving <strong>LCP from 4.2s → 1.8s</strong>, resulting in a 22% uplift in organic search rankings.</span>,
                    "Mentored 3 junior developers through bi-weekly code reviews and pair programming sessions, with all 3 promoted within the year.",
                    <span key="4">Collaborated directly with the product owner to define UI requirements, shipping <strong>12 major features</strong> across 4 quarters with 98% on-time delivery.</span>
                  ]}
                />

                <CVExperienceItem
                  role="Full-Stack Developer"
                  duration="Jun 2022 — Dec 2023"
                  companyName="Digital Africa Ltd."
                  companyUrl="https://digitalafrica.example.com"
                  companyDescription="Pan-African digital agency delivering e-commerce and fintech solutions."
                  bullets={[
                    <span key="1">Built and deployed <strong>8 client-facing web applications</strong> using React and Node.js, serving a combined user base of 40,000+ monthly active users.</span>,
                    <span key="2">Integrated <strong>M-Pesa and Flutterwave payment APIs</strong>, enabling seamless mobile money transactions that increased client revenue by an average of 35%.</span>,
                    <span key="3">Reduced server costs by <strong>$8,000/year</strong> by migrating legacy monolithic applications to microservices on AWS Lambda.</span>,
                    "Established CI/CD pipelines with GitHub Actions, reducing deployment time from 45 minutes to under 6 minutes."
                  ]}
                />

                <CVExperienceItem
                  role="Junior Web Developer (Intern → Full-Time)"
                  duration="Sep 2021 — May 2022"
                  companyName="StartupNest Uganda"
                  companyUrl="https://startupnest.example.com"
                  companyDescription="Early-stage tech incubator supporting founders with MVP development."
                  bullets={[
                    <span key="1">Developed <strong>5 MVP web applications</strong> for incubated startups within 3–6 week sprints, enabling founders to attract early investment.</span>,
                    "Built a custom CMS using Vue.js and a REST API that reduced content update time for clients from 2 days to under 30 minutes.",
                    <span key="3">Converted from intern to full-time after 3 months based on performance reviews rating consistently <strong>above expectations</strong>.</span>
                  ]}
                />
              </div>
            </div>

            <div className={sharedStyles.cvDivider}><span className={sharedStyles.cvDividerOrnament}>✦</span></div>

            <div className={sharedStyles.cvSection}>
              <h3 className={sharedStyles.cvSectionTitle}>Achievements</h3>

              <div className={styles.achievementItem}>
                <div className={styles.achIcon}>🏆</div>
                <div className={styles.achText}><strong>1st Place — HackAfrica 2023 Hackathon</strong> — Led a 4-person team to build an AI-powered agri-finance tool, winning from a field of 120+ teams across 12 African countries.</div>
              </div>

              <div className={styles.achievementItem}>
                <div className={styles.achIcon}>🌍</div>
                <div className={styles.achText}><strong>Open Source Contribution Recognition</strong> — Merged 18 pull requests into popular open-source repositories (React Query, Radix UI), accumulating 240+ GitHub stars on personal projects.</div>
              </div>
            </div>

          </main>
        </div>
        
        <footer className={styles.cvFooter}>
          <p>© 2025 Karungi Anna. All rights reserved.</p>
          <span className={styles.footerName}>Karungi Anna</span>
          <p>Designed &amp; Built with ♥</p>
        </footer>
      </div>
    </div>
  );
}
