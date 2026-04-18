import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const P_GREEN = '#294034';
const P_GREEN_LT = '#3e5c4d';
const P_CREAM = '#f5efe6';
const P_WINE = '#6b2537';
const P_GOLD = '#d4af37';
const P_INK = '#1a1310';
const P_MUTED = '#898681';
const P_BORDER = '#e8e1d5';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: P_CREAM,
    fontFamily: 'Helvetica',
  },
  header: {
    backgroundColor: P_GREEN,
    flexDirection: 'row',
    padding: '40px 40px',
  },
  headerLeftCol: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerRightCol: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerName: {
    fontSize: 28,
    fontFamily: 'Times-Roman',
    color: P_CREAM,
    marginBottom: 8,
    letterSpacing: 1,
  },
  headerRole: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: P_CREAM,
    marginBottom: 8,
  },
  headerLink: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: P_GOLD,
  },
  headerContact: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: P_CREAM,
    marginBottom: 8,
  },
  
  // FIX: Page Layout engine logic. Abolished global row flexing.
  bodyContainer: {
    position: 'relative',
    width: '100%',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0, // Reaches the bottom of the content boundary on Page 1
    width: '32%',
    padding: '30px 20px 30px 40px',
    borderRight: `1px solid ${P_BORDER}`,
  },
  mainContent: {
    marginLeft: '32%', // Prevents overlapping without Flex row conflicts
    width: '68%',
    padding: '30px 40px 30px 30px',
  },
  
  sectionTitle: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    letterSpacing: 2,
    color: P_WINE,
    textTransform: 'uppercase',
    borderBottom: `1px solid ${P_WINE}`,
    paddingBottom: 8,
    marginBottom: 16,
  },
  summaryText: {
    fontFamily: 'Times-Roman',
    fontSize: 12,
    lineHeight: 1.6,
    color: P_INK,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: P_BORDER,
    width: '100%',
    marginVertical: 20,
  },
  experienceItem: {
    marginBottom: 20,
  },
  expRole: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: P_INK,
    marginBottom: 4,
  },
  expCompanyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  expCompany: {
    fontSize: 10,
    fontFamily: 'Times-Italic',
    color: P_INK,
  },
  expDuration: {
    fontSize: 9,
    color: P_MUTED,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingLeft: 10,
  },
  bulletPoint: {
    width: 10,
    fontSize: 11,
    color: P_WINE,
    fontFamily: 'Times-Roman',
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
    color: P_INK,
  },
  achText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: P_INK,
  },
  skillItem: {
    fontSize: 9,
    color: P_INK,
    marginBottom: 6,
  },
  sidebarBlock: {
    marginBottom: 30,
  },
  eduDegree: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: P_INK,
    marginBottom: 3,
  },
  eduSchool: {
    fontSize: 9,
    color: P_MUTED,
    marginBottom: 3,
  },
  eduYear: {
    fontSize: 8,
    color: P_WINE,
    marginBottom: 10,
  },
  strengthItem: {
    marginBottom: 12,
  },
  strengthName: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: P_INK,
    marginBottom: 3,
  },
  strengthProof: {
    fontSize: 8,
    color: P_MUTED,
    lineHeight: 1.4,
  },
  footer: {
    backgroundColor: P_GREEN,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 40px',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: 7,
    color: '#898681',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

type Experience = {
  role: string;
  duration: string;
  companyName: string;
  bullets: string[];
};

export const CVPDF = ({ experiences }: { experiences: Experience[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* HEADER SECTION */}
      <View style={[styles.header, { justifyContent: 'space-between' }]}>
        <View style={styles.headerLeftCol}>
          <Text style={styles.headerName}>KARUNGI ANNA</Text>
          <Text style={styles.headerRole}>Full Stack Developer</Text>
          <Text style={styles.headerLink}>Link to portfolio</Text>
        </View>
        <View style={styles.headerRightCol}>
          <Text style={styles.headerContact}>+256 705 562066</Text>
          <Text style={styles.headerContact}>KAMPALA, UGANDA</Text>
          <Text style={styles.headerContact}>annakarungi15@gmail.com</Text>
        </View>
      </View>

      {/* TWO COLUMN BODY REFACTORED TO ABSOLUTE SIDEBAR FOR PAGINATION SAFETY */}
      <View style={styles.bodyContainer}>
        
        {/* SIDEBAR ON PAGE 1 */}
        <View style={styles.sidebar}>
          <View style={styles.sidebarBlock}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.skillItem}>• React / Next.js</Text>
            <Text style={styles.skillItem}>• JavaScript</Text>
            <Text style={styles.skillItem}>• TypeScript</Text>
            <Text style={styles.skillItem}>• Tailwind CSS</Text>
            <Text style={styles.skillItem}>• Figma / UI Design</Text>
            <Text style={styles.skillItem}>• Django REST Framework</Text>
            <Text style={styles.skillItem}>• Python</Text>
            <Text style={styles.skillItem}>• Node.js / Express</Text>
            <Text style={styles.skillItem}>• REST APIs</Text>
            <Text style={styles.skillItem}>• PostgreSQL / Neon</Text>
            <Text style={styles.skillItem}>• MongoDB</Text>
            <Text style={styles.skillItem}>• Docker</Text>
            <Text style={styles.skillItem}>• CI/CD Pipelines</Text>
            <Text style={styles.skillItem}>• Git / GitHub</Text>
            <Text style={styles.skillItem}>• Agile / Scrum</Text>
          </View>

          <View style={styles.sidebarBlock}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View>
              <Text style={styles.eduDegree}>MSc. Computer Science</Text>
              <Text style={styles.eduSchool}>Makerere University, Kampala</Text>
              <Text style={styles.eduYear}>2022 — 2024</Text>
            </View>
            <View>
              <Text style={styles.eduDegree}>BSc. Software Engineering</Text>
              <Text style={styles.eduSchool}>Makerere University, Kampala</Text>
              <Text style={styles.eduYear}>2018 — 2022</Text>
            </View>
          </View>

          <View style={styles.sidebarBlock}>
            <Text style={styles.sectionTitle}>Strengths</Text>
            <View style={styles.strengthItem}>
              <Text style={styles.strengthName}>Problem Solving</Text>
              <Text style={styles.strengthProof}>Reduced system latency by 40% via re-architecting APIs.</Text>
            </View>
            <View style={styles.strengthItem}>
              <Text style={styles.strengthName}>Communication</Text>
              <Text style={styles.strengthProof}>Consistently rated 4.9/5 by clients for clarity.</Text>
            </View>
            <View style={styles.strengthItem}>
              <Text style={styles.strengthName}>Adaptability</Text>
              <Text style={styles.strengthProof}>Onboarded to 3 new tech stacks within 2 weeks each.</Text>
            </View>
          </View>
        </View>
        
        {/* MAIN CONTENT (Paginates infinitely without Flex Row overlap bugs) */}
        <View style={styles.mainContent}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>
            Results-driven Full-Stack Developer with 3+ years of experience designing and building scalable web applications and digital products. Adept at bridging the gap between design and engineering, with a strong focus on performance, accessibility, and user experience. Thrives in remote-first environments, collaborating with distributed teams across multiple time zones to deliver impactful, well-crafted solutions.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Work Experience</Text>
          
          {experiences.length > 0 ? experiences.map((exp, idx) => (
            <View key={idx} style={styles.experienceItem}>
              <Text style={styles.expRole}>{exp.role}</Text>
              <View style={styles.expCompanyRow}>
                <Text style={styles.expCompany}>{exp.companyName}</Text>
                <Text style={styles.expDuration}>{exp.duration}</Text>
              </View>
              
              {exp.bullets.map((bullet, bIdx) => (
                <View key={bIdx} style={styles.bulletRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>
          )) : (
            <Text style={styles.summaryText}>No experiences configured.</Text>
          )}

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Achievements</Text>
          
          {/* REMOVED wrap={false} WHICH WAS CAUSING THE TEXT COLLISION BUG ON PAGE BREAKS */}
          <View style={styles.experienceItem}>
            <Text style={styles.expRole}>1st Place — HackAfrica 2023 Hackathon</Text>
            <Text style={styles.achText}>Led a 4-person team to build an AI-powered agri-finance tool, winning from a field of 120+ teams across 12 African countries.</Text>
          </View>
          
          <View style={styles.experienceItem}>
            <Text style={styles.expRole}>Open Source Contributions</Text>
            <Text style={styles.achText}>Merged 18 pull requests into popular open-source repositories (React Query, Radix UI), accumulating 240+ GitHub stars on personal projects.</Text>
          </View>
          
        </View>

      </View>

      {/* FOOTER - Centered strict string */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>© 2026 Karungi Anna. All rights reserved.</Text>
      </View>
    </Page>
  </Document>
);
