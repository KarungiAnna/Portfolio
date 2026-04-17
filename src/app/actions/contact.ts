'use server';

import { db } from '@/db';
import { contactMessages } from '@/db/schema';
import { ContactSchema } from '@/lib/schemas';

export async function submitContactForm(data: unknown) {
  try {
    const validatedData = await ContactSchema.parseAsync(data);
    
    // Combine firstName and lastName for the db schema which has `name`
    const { firstName, lastName, ...rest } = validatedData;
    const name = `${firstName} ${lastName}`;

    await db.insert(contactMessages).values({
      name,
      ...rest,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'An unknown error occurred while submitting the form.' };
  }
}
