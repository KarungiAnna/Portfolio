import { z } from 'zod';

export const ProjectSchema = z.object({
  title: z.string().min(1, "Title is required").max(120),
  description: z.string().min(1, "Description is required").max(500),
  tag: z.string().min(1, "Tag is required"),
  liveUrl: z.string().url("Invalid URL").optional().or(z.literal('')),
  repoUrl: z.string().url("Invalid URL").optional().or(z.literal('')),
  order: z.number().int().optional(),
});

export const ExperienceSchema = z.object({
  role: z.string().min(1, "Role is required"),
  duration: z.string().min(1, "Duration is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyUrl: z.string().url("Invalid URL").optional().or(z.literal('')),
  companyDescription: z.string().min(1, "Company description is required"),
  bullets: z.array(z.string()),
  order: z.number().int().optional(),
});

export const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});
