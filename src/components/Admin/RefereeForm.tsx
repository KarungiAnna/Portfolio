'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createReferee } from '@/app/actions/cv-sections';
import styles from './AdminForms.module.css';

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional().or(z.literal('')),
  order: z.number().int().optional(),
});

type FormData = z.infer<typeof FormSchema>;

export default function RefereeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { name: '', title: '', company: '', email: '', phone: '', order: 0 },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError('');
    const res = await createReferee(data);
    if (res.success) {
      reset();
    } else {
      setServerError(res.error || 'Failed to add referee');
    }
    setIsSubmitting(false);
  };

  return (
    <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
      {serverError && <p className={styles.errorText} style={{ marginBottom: '1rem', background: 'rgba(107,37,55,0.1)', padding: '0.8rem' }}>{serverError}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className={styles.formGroup}>
          <label htmlFor="ref-name">Full Name *</label>
          <input id="ref-name" type="text" {...register('name')} placeholder="e.g. John Smith" />
          {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ref-title">Job Title *</label>
          <input id="ref-title" type="text" {...register('title')} placeholder="e.g. Engineering Manager" />
          {errors.title && <span className={styles.errorText}>{errors.title.message}</span>}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="ref-company">Company *</label>
        <input id="ref-company" type="text" {...register('company')} placeholder="e.g. TechCorp Solutions" />
        {errors.company && <span className={styles.errorText}>{errors.company.message}</span>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className={styles.formGroup}>
          <label htmlFor="ref-email">Email *</label>
          <input id="ref-email" type="email" {...register('email')} />
          {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ref-phone">Phone (optional)</label>
          <input id="ref-phone" type="text" {...register('phone')} placeholder="+256 700 000000" />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="ref-order">Display Order</label>
        <input id="ref-order" type="number" {...register('order', { valueAsNumber: true })} />
      </div>

      <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Add Referee'}
      </button>
    </form>
  );
}
