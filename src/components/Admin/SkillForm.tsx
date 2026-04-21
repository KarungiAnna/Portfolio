'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createSkill } from '@/app/actions/cv-sections';
import styles from './AdminForms.module.css';

const FormSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
  category: z.string().optional().or(z.literal('')),
  order: z.number().int().optional(),
});

type FormData = z.infer<typeof FormSchema>;

export default function SkillForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { name: '', category: '', order: 0 },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError('');
    const res = await createSkill(data);
    if (res.success) {
      reset();
    } else {
      setServerError(res.error || 'Failed to add skill');
    }
    setIsSubmitting(false);
  };

  return (
    <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
      {serverError && <p className={styles.errorText} style={{ marginBottom: '1rem', background: 'rgba(107,37,55,0.1)', padding: '0.8rem' }}>{serverError}</p>}

      <div className={styles.formGroup}>
        <label htmlFor="skill-name">Skill Name *</label>
        <input id="skill-name" type="text" {...register('name')} placeholder="e.g. React / Next.js" />
        {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className={styles.formGroup}>
          <label htmlFor="category">Category (optional)</label>
          <input id="category" type="text" {...register('category')} placeholder="e.g. Frontend" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="skill-order">Display Order</label>
          <input id="skill-order" type="number" {...register('order', { valueAsNumber: true })} />
        </div>
      </div>

      <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Add Skill'}
      </button>
    </form>
  );
}
