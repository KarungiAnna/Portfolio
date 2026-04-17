import { db } from './index';
import { projects, experiences, contactMessages } from './schema';
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
