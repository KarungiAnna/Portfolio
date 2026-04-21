import { db } from './index';
import { projects, experiences, contactMessages, cvSummary, cvEducation, cvSkills, cvStrengths, cvCertifications, cvReferees } from './schema';
import { desc, sql } from 'drizzle-orm';

export async function getDashboardStats() {
  const [projectsCount] = await db.select({ count: sql<number>`count(*)` }).from(projects);
  const [experiencesCount] = await db.select({ count: sql<number>`count(*)` }).from(experiences);
  const [messagesCount] = await db.select({ count: sql<number>`count(*)` }).from(contactMessages);

  return {
    projects: Number(projectsCount.count),
    experiences: Number(experiencesCount.count),
    messages: Number(messagesCount.count),
  };
}

export async function getAllProjects() {
  // Sort primarily by order, then fallback to createdAt descending
  return await db.select().from(projects).orderBy(projects.order, desc(projects.createdAt));
}

export async function getAllExperiences() {
  return await db.select().from(experiences).orderBy(experiences.order, desc(experiences.id));
}

export async function getAllMessages() {
  return await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
}

export async function getSummary() {
  const rows = await db.select().from(cvSummary).limit(1);
  return rows[0] ?? null;
}

export async function getAllEducation() {
  return await db.select().from(cvEducation).orderBy(cvEducation.order, desc(cvEducation.id));
}

export async function getAllSkills() {
  return await db.select().from(cvSkills).orderBy(cvSkills.order, cvSkills.id);
}

export async function getAllStrengths() {
  return await db.select().from(cvStrengths).orderBy(cvStrengths.order, cvStrengths.id);
}

export async function getAllCertifications() {
  return await db.select().from(cvCertifications).orderBy(cvCertifications.order, cvCertifications.id);
}

export async function getAllReferees() {
  return await db.select().from(cvReferees).orderBy(cvReferees.order, cvReferees.id);
}
