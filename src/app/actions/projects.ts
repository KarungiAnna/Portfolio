'use server';

import { db } from '@/db';
import { projects } from '@/db/schema';
import { ProjectSchema } from '@/lib/schemas';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function createProject(data: unknown) {
  try {
    const validatedData = await ProjectSchema.parseAsync(data);
    await db.insert(projects).values(validatedData);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function updateProject(id: number, data: unknown) {
  try {
    const validatedData = await ProjectSchema.parseAsync(data);
    await db.update(projects).set(validatedData).where(eq(projects.id, id));
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteProject(id: number) {
  try {
    await db.delete(projects).where(eq(projects.id, id));
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
