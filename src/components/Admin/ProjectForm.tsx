'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProjectSchema } from '@/lib/schemas';
import { createProject } from '@/app/actions/projects';
import { z } from 'zod';
import styles from './AdminForms.module.css';

type ProjectData = z.infer<typeof ProjectSchema>;

export default function ProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProjectData>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      order: 0,
      liveUrl: '',
      repoUrl: '',
    }
  });

  const onSubmit = async (data: ProjectData) => {
    setIsSubmitting(true);
    setServerError('');
    
    // Zod transforms empty strings back if needed, but the schema converts '' into undefined if we wrote it well. 
    // Wait, `.optional().or(z.literal(''))` means empty string passes.
    const res = await createProject(data);
    
    if (res.success) {
      reset();
    } else {
      setServerError(res.error || 'Failed to create project');
    }
    
    setIsSubmitting(false);
  };

  return (
    <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
      {serverError && <p className={styles.errorText} style={{ marginBottom: '1rem', background: 'rgba(107,37,55,0.1)', padding: '0.8rem' }}>{serverError}</p>}
      
      <div className={styles.formGroup}>
        <label htmlFor="title">Title *</label>
        <input id="title" type="text" {...register('title')} />
        {errors.title && <span className={styles.errorText}>{errors.title.message}</span>}
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="tag">Tag / Category *</label>
        <input id="tag" type="text" {...register('tag')} placeholder="e.g. Full-Stack · React" />
        {errors.tag && <span className={styles.errorText}>{errors.tag.message}</span>}
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="description">Description *</label>
        <textarea id="description" rows={3} {...register('description')}></textarea>
        {errors.description && <span className={styles.errorText}>{errors.description.message}</span>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className={styles.formGroup}>
          <label htmlFor="liveUrl">Live URL</label>
          <input id="liveUrl" type="url" {...register('liveUrl')} />
          {errors.liveUrl && <span className={styles.errorText}>{errors.liveUrl.message}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="repoUrl">Repo URL</label>
          <input id="repoUrl" type="url" {...register('repoUrl')} />
          {errors.repoUrl && <span className={styles.errorText}>{errors.repoUrl.message}</span>}
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="order">Display Order</label>
        <input id="order" type="number" {...register('order', { valueAsNumber: true })} />
        {errors.order && <span className={styles.errorText}>{errors.order.message}</span>}
      </div>
      
      <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Add Project'}
      </button>
    </form>
  );
}
