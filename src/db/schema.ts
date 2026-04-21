import { pgTable, serial, text, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const cvSummary = pgTable('cv_summary', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
});

export const cvEducation = pgTable('cv_education', {
  id: serial('id').primaryKey(),
  degree: text('degree').notNull(),
  institution: text('institution').notNull(),
  year: text('year').notNull(),
  description: text('description'),
  order: integer('order').default(0),
});

export const cvSkills = pgTable('cv_skills', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  category: text('category'),
  order: integer('order').default(0),
});

export const cvStrengths = pgTable('cv_strengths', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  proof: text('proof').notNull(),
  order: integer('order').default(0),
});

export const cvCertifications = pgTable('cv_certifications', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  issuer: text('issuer').notNull(),
  year: text('year').notNull(),
  url: text('url'),
  order: integer('order').default(0),
});

export const cvReferees = pgTable('cv_referees', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  title: text('title').notNull(),
  company: text('company').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  order: integer('order').default(0),
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  tag: text('tag').notNull(),
  imageUrl: text('image_url'),
  liveUrl: text('live_url'),
  repoUrl: text('repo_url'),
  order: integer('order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

export const experiences = pgTable('experiences', {
  id: serial('id').primaryKey(),
  role: text('role').notNull(),
  duration: text('duration').notNull(),
  companyName: text('company_name').notNull(),
  companyUrl: text('company_url'),
  companyDescription: text('company_description').notNull(),
  bullets: jsonb('bullets').$type<string[]>().notNull(),
  order: integer('order').default(0),
});

export const contactMessages = pgTable('contact_messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  subject: text('subject'),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
