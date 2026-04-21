'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createStrength } from '@/app/actions/cv-sections';
import styles from './AdminForms.module.css';

const FormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  proof: z.string().min(1, "Proof is required"),
  order: z.number().int().optional(),
});

type FormData = z.infer<typeof FormSchema>;

export default function StrengthForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { title: '', proof: '', order: 0 },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError('');
    const res = await createStrength(data);
    if (res.success) {
      reset();
    } else {
      setServerError(res.error || 'Failed to add strength');
    }
    setIsSubmitting(false);
  };

  return (
    <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
      {serverError && <p className={styles.errorText} style={{ marginBottom: '1rem', background: 'rgba(107,37,55,0.1)', padding: '0.8rem' }}>{serverError}</p>}

      <div className={styles.formGroup}>
        <label htmlFor="strength-title">Strength *</label>
        <input id="strength-title" type="text" {...register('title')} placeholder="e.g. Problem Solving" />
        {errors.title && <span className={styles.errorText}>{errors.title.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="proof">Proof / Evidence *</label>
        <textarea id="proof" rows={3} {...register('proof')} placeholder="e.g. Reduced latency by 40% by re-architecting the API pipeline." />
        {errors.proof && <span className={styles.errorText}>{errors.proof.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="strength-order">Display Order</label>
        <input id="strength-order" type="number" {...register('order', { valueAsNumber: true })} />
      </div>

      <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Add Strength'}
      </button>
    </form>
  );
}
