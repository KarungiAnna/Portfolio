'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { upsertSummary } from '@/app/actions/cv-sections';
import styles from './AdminForms.module.css';

const FormSchema = z.object({
  content: z.string().min(1, "Summary content is required"),
});

type FormData = z.infer<typeof FormSchema>;

export default function SummaryForm({ initialContent }: { initialContent?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [saved, setSaved] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { content: initialContent ?? '' },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError('');
    setSaved(false);
    const res = await upsertSummary(data);
    if (res.success) {
      setSaved(true);
    } else {
      setServerError(res.error || 'Failed to save summary');
    }
    setIsSubmitting(false);
  };

  return (
    <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
      {serverError && <p className={styles.errorText} style={{ marginBottom: '1rem', background: 'rgba(107,37,55,0.1)', padding: '0.8rem' }}>{serverError}</p>}
      {saved && <p style={{ marginBottom: '1rem', background: 'rgba(41,64,52,0.1)', padding: '0.8rem', fontSize: '0.8rem', color: 'var(--green)' }}>Saved successfully.</p>}

      <div className={styles.formGroup}>
        <label htmlFor="content">Professional Summary *</label>
        <textarea id="content" rows={6} {...register('content')} placeholder="Write your professional summary..." />
        {errors.content && <span className={styles.errorText}>{errors.content.message}</span>}
      </div>

      <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Save Summary'}
      </button>
    </form>
  );
}
