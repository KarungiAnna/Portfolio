import { z } from 'zod';

export const ProjectSchema = z.object({
  title: z.string().min(1, "Title is required").max(120),
  description: z.string().min(1, "Description is required").max(500),
  tag: z.string().min(1, "Tag is required"),
  imageUrl: z.string().optional().or(z.literal('')),
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

export const SummarySchema = z.object({
  content: z.string().min(1, "Summary content is required"),
});

export const EducationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  year: z.string().min(1, "Year is required"),
  description: z.string().optional().or(z.literal('')),
  order: z.number().int().optional(),
});

export const SkillSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
  category: z.string().optional().or(z.literal('')),
  order: z.number().int().optional(),
});

export const StrengthSchema = z.object({
  title: z.string().min(1, "Title is required"),
  proof: z.string().min(1, "Proof is required"),
  order: z.number().int().optional(),
});

export const CertificationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  year: z.string().min(1, "Year is required"),
  url: z.string().url("Invalid URL").optional().or(z.literal('')),
  order: z.number().int().optional(),
});

export const RefereeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional().or(z.literal('')),
  order: z.number().int().optional(),
});

export const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});
