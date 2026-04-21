'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createCertification } from '@/app/actions/cv-sections';
import styles from './AdminForms.module.css';

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  year: z.string().min(1, "Year is required"),
  url: z.string().url("Invalid URL").optional().or(z.literal('')),
  order: z.number().int().optional(),
});

type FormData = z.infer<typeof FormSchema>;

export default function CertificationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { name: '', issuer: '', year: '', url: '', order: 0 },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError('');
    const res = await createCertification(data);
    if (res.success) {
      reset();
    } else {
      setServerError(res.error || 'Failed to add certification');
    }
    setIsSubmitting(false);
  };

  return (
    <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
      {serverError && <p className={styles.errorText} style={{ marginBottom: '1rem', background: 'rgba(107,37,55,0.1)', padding: '0.8rem' }}>{serverError}</p>}

      <div className={styles.formGroup}>
        <label htmlFor="cert-name">Certification Name *</label>
        <input id="cert-name" type="text" {...register('name')} placeholder="e.g. AWS Solutions Architect" />
        {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className={styles.formGroup}>
          <label htmlFor="issuer">Issuer *</label>
          <input id="issuer" type="text" {...register('issuer')} placeholder="e.g. Amazon Web Services" />
          {errors.issuer && <span className={styles.errorText}>{errors.issuer.message}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="cert-year">Year *</label>
          <input id="cert-year" type="text" {...register('year')} placeholder="e.g. 2023" />
          {errors.year && <span className={styles.errorText}>{errors.year.message}</span>}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cert-url">Certificate URL (optional)</label>
        <input id="cert-url" type="url" {...register('url')} />
        {errors.url && <span className={styles.errorText}>{errors.url.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cert-order">Display Order</label>
        <input id="cert-order" type="number" {...register('order', { valueAsNumber: true })} />
      </div>

      <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Add Certification'}
      </button>
    </form>
  );
}
