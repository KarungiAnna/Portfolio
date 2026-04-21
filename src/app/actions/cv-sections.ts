'use server';

import { db } from '@/db';
import { cvSummary, cvEducation, cvSkills, cvStrengths, cvCertifications, cvReferees } from '@/db/schema';
import { SummarySchema, EducationSchema, SkillSchema, StrengthSchema, CertificationSchema, RefereeSchema } from '@/lib/schemas';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

// ── Summary (single row, upsert) ─────────────────────────────────────────────

export async function upsertSummary(data: unknown) {
  try {
    const { content } = await SummarySchema.parseAsync(data);
    await db.insert(cvSummary).values({ id: 1, content }).onConflictDoUpdate({
      target: cvSummary.id,
      set: { content },
    });
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// ── Education ─────────────────────────────────────────────────────────────────

export async function createEducation(data: unknown) {
  try {
    const validated = await EducationSchema.parseAsync(data);
    await db.insert(cvEducation).values(validated);
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteEducation(id: number) {
  try {
    await db.delete(cvEducation).where(eq(cvEducation.id, id));
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// ── Skills ────────────────────────────────────────────────────────────────────

export async function createSkill(data: unknown) {
  try {
    const validated = await SkillSchema.parseAsync(data);
    await db.insert(cvSkills).values(validated);
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteSkill(id: number) {
  try {
    await db.delete(cvSkills).where(eq(cvSkills.id, id));
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// ── Strengths ─────────────────────────────────────────────────────────────────

export async function createStrength(data: unknown) {
  try {
    const validated = await StrengthSchema.parseAsync(data);
    await db.insert(cvStrengths).values(validated);
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteStrength(id: number) {
  try {
    await db.delete(cvStrengths).where(eq(cvStrengths.id, id));
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// ── Certifications ────────────────────────────────────────────────────────────

export async function createCertification(data: unknown) {
  try {
    const validated = await CertificationSchema.parseAsync(data);
    await db.insert(cvCertifications).values(validated);
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteCertification(id: number) {
  try {
    await db.delete(cvCertifications).where(eq(cvCertifications.id, id));
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// ── Referees ──────────────────────────────────────────────────────────────────

export async function createReferee(data: unknown) {
  try {
    const validated = await RefereeSchema.parseAsync(data);
    await db.insert(cvReferees).values(validated);
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteReferee(id: number) {
  try {
    await db.delete(cvReferees).where(eq(cvReferees.id, id));
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
