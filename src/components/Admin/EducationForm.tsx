'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createEducation } from '@/app/actions/cv-sections';
import styles from './AdminForms.module.css';

const FormSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  year: z.string().min(1, "Year is required"),
  description: z.string().optional().or(z.literal('')),
  order: z.number().int().optional(),
});

type FormData = z.infer<typeof FormSchema>;

export default function EducationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { degree: '', institution: '', year: '', description: '', order: 0 },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError('');
    const res = await createEducation(data);
    if (res.success) {
      reset();
    } else {
      setServerError(res.error || 'Failed to add education entry');
    }
    setIsSubmitting(false);
  };

  return (
    <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
      {serverError && <p className={styles.errorText} style={{ marginBottom: '1rem', background: 'rgba(107,37,55,0.1)', padding: '0.8rem' }}>{serverError}</p>}

      <div className={styles.formGroup}>
        <label htmlFor="degree">Degree / Qualification *</label>
        <input id="degree" type="text" {...register('degree')} placeholder="e.g. BSc. Software Engineering" />
        {errors.degree && <span className={styles.errorText}>{errors.degree.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="institution">Institution *</label>
        <input id="institution" type="text" {...register('institution')} placeholder="e.g. Makerere University, Kampala" />
        {errors.institution && <span className={styles.errorText}>{errors.institution.message}</span>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className={styles.formGroup}>
          <label htmlFor="year">Year(s) *</label>
          <input id="year" type="text" {...register('year')} placeholder="e.g. 2018 — 2022" />
          {errors.year && <span className={styles.errorText}>{errors.year.message}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="edu-order">Display Order</label>
          <input id="edu-order" type="number" {...register('order', { valueAsNumber: true })} />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Description (optional)</label>
        <textarea id="description" rows={2} {...register('description')} placeholder="Optional notes..." />
      </div>

      <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Add Education'}
      </button>
    </form>
  );
}
