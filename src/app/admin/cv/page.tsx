import { getAllExperiences, getSummary, getAllEducation, getAllSkills, getAllStrengths, getAllCertifications, getAllReferees } from '@/db/queries';
import CVAdminTabs from '@/components/Admin/CVAdminTabs';
import styles from '../admin.module.css';

export default async function CVEntriesPage() {
  const [summary, experiences, education, skills, strengths, certifications, referees] = await Promise.all([
    getSummary(),
    getAllExperiences(),
    getAllEducation(),
    getAllSkills(),
    getAllStrengths(),
    getAllCertifications(),
    getAllReferees(),
  ]);

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Manage CV</h1>
      </div>
      <CVAdminTabs
        summary={summary}
        experiences={experiences}
        education={education}
        skills={skills}
        strengths={strengths}
        certifications={certifications}
        referees={referees}
      />
    </div>
  );
}
