import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const P_GREEN = '#294034';
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
  bodyContainer: {
    position: 'relative',
    width: '100%',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '32%',
    padding: '30px 20px 30px 40px',
    borderRight: `1px solid ${P_BORDER}`,
  },
  mainContent: {
    marginLeft: '32%',
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
  refereeItem: {
    marginBottom: 16,
  },
  refName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: P_INK,
    marginBottom: 2,
  },
  refDetail: {
    fontSize: 9,
    color: P_MUTED,
    marginBottom: 2,
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

type Experience = { role: string; duration: string; companyName: string; bullets: string[] };
type Education = { degree: string; institution: string; year: string };
type Skill = { name: string };
type Strength = { title: string; proof: string };
type Certification = { name: string; issuer: string; year: string };
type Referee = { name: string; title: string; company: string; email: string; phone: string | null };

type Props = {
  summary: string | null;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  strengths: Strength[];
  certifications: Certification[];
  referees: Referee[];
};

export const CVPDF = ({ summary, experiences, education, skills, strengths, certifications, referees }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>

      <View style={[styles.header, { justifyContent: 'space-between' }]}>
        <View style={styles.headerLeftCol}>
          <Text style={styles.headerName}>KARUNGI ANNA</Text>
          <Text style={styles.headerRole}>Junior Full Stack Developer</Text>
          <Text style={styles.headerLink}>Link to portfolio</Text>
        </View>
        <View style={styles.headerRightCol}>
          <Text style={styles.headerContact}>+256 705 562066</Text>
          <Text style={styles.headerContact}>KAMPALA, UGANDA</Text>
          <Text style={styles.headerContact}>annakarungi15@gmail.com</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>

        {/* SIDEBAR */}
        <View style={styles.sidebar}>
          {skills.length > 0 && (
            <View style={styles.sidebarBlock}>
              <Text style={styles.sectionTitle}>Skills</Text>
              {skills.map((s, i) => (
                <Text key={i} style={styles.skillItem}>• {s.name}</Text>
              ))}
            </View>
          )}

          {(education.length > 0 || certifications.length > 0) && (
            <View style={styles.sidebarBlock}>
              {education.length > 0 && (
                <>
                  <Text style={styles.sectionTitle}>Education</Text>
                  {education.map((edu, i) => (
                    <View key={i}>
                      <Text style={styles.eduDegree}>{edu.degree}</Text>
                      <Text style={styles.eduSchool}>{edu.institution}</Text>
                      <Text style={styles.eduYear}>{edu.year}</Text>
                    </View>
                  ))}
                </>
              )}
              {certifications.length > 0 && (
                <>
                  <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Certifications</Text>
                  {certifications.map((cert, i) => (
                    <View key={i}>
                      <Text style={styles.eduDegree}>{cert.name}</Text>
                      <Text style={styles.eduSchool}>{cert.issuer}</Text>
                      <Text style={styles.eduYear}>{cert.year}</Text>
                    </View>
                  ))}
                </>
              )}
            </View>
          )}

          {strengths.length > 0 && (
            <View style={styles.sidebarBlock}>
              <Text style={styles.sectionTitle}>Strengths</Text>
              {strengths.map((s, i) => (
                <View key={i} style={styles.strengthItem}>
                  <Text style={styles.strengthName}>{s.title}</Text>
                  <Text style={styles.strengthProof}>{s.proof}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* MAIN CONTENT */}
        <View style={styles.mainContent}>
          {summary && (
            <>
              <Text style={styles.sectionTitle}>Professional Summary</Text>
              <Text style={styles.summaryText}>{summary}</Text>
              <View style={styles.divider} />
            </>
          )}

          {experiences.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Work Experience</Text>
              {experiences.map((exp, idx) => (
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
              ))}
            </>
          )}

          {referees.length > 0 && (
            <>
              <View style={styles.divider} />
              <Text style={styles.sectionTitle}>Referees</Text>
              {referees.map((ref, i) => (
                <View key={i} style={styles.refereeItem}>
                  <Text style={styles.refName}>{ref.name}</Text>
                  <Text style={styles.refDetail}>{ref.title} · {ref.company}</Text>
                  <Text style={styles.refDetail}>{ref.email}{ref.phone ? ` · ${ref.phone}` : ''}</Text>
                </View>
              ))}
            </>
          )}
        </View>

      </View>

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>© 2026 Karungi Anna. All rights reserved.</Text>
      </View>
    </Page>
  </Document>
);
