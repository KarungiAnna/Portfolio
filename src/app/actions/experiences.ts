'use server';

import { db } from '@/db';
import { experiences } from '@/db/schema';
import { ExperienceSchema } from '@/lib/schemas';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function createExperience(data: unknown) {
  try {
    const validatedData = await ExperienceSchema.parseAsync(data);
    await db.insert(experiences).values(validatedData);
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateExperience(id: number, data: unknown) {
  try {
    const validatedData = await ExperienceSchema.parseAsync(data);
    await db.update(experiences).set(validatedData).where(eq(experiences.id, id));
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteExperience(id: number) {
  try {
    await db.delete(experiences).where(eq(experiences.id, id));
    revalidatePath('/cv');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
