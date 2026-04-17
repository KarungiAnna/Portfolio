import { pgTable, serial, text, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  tag: text('tag').notNull(),
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
