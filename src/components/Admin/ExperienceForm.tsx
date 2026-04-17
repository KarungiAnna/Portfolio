'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createExperience } from '@/app/actions/experiences';
import styles from './AdminForms.module.css';

// We create a custom schema for the form because react-hook-form's useFieldArray
// requires an array of objects, whereas our server schema takes an array of strings.
const FormSchema = z.object({
  role: z.string().min(1, "Role is required"),
  duration: z.string().min(1, "Duration is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyUrl: z.string().url("Invalid URL").optional().or(z.literal('')),
  companyDescription: z.string().min(1, "Company description is required"),
  bullets: z.array(z.object({ value: z.string().min(1, "Bullet cannot be empty") })).min(1, "At least one bullet is required"),
  order: z.number().int().optional(),
});

type ExperienceFormData = z.infer<typeof FormSchema>;

export default function ExperienceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const { register, control, handleSubmit, reset, formState: { errors } } = useForm<ExperienceFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      order: 0,
      role: '',
      duration: '',
      companyName: '',
      companyUrl: '',
      companyDescription: '',
      bullets: [{ value: '' }],
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "bullets",
  });

  const onSubmit = async (data: ExperienceFormData) => {
    setIsSubmitting(true);
    setServerError('');
    
    // Map the internal {value: string} array back to a primitive string array for the server
    const serverPayload = {
      ...data,
      bullets: data.bullets.map(b => b.value)
    };

    const res = await createExperience(serverPayload);
    
    if (res.success) {
      reset();
    } else {
      setServerError(res.error || 'Failed to create experience');
    }
    
    setIsSubmitting(false);
  };

  return (
    <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
      {serverError && <p className={styles.errorText} style={{ marginBottom: '1rem', background: 'rgba(107,37,55,0.1)', padding: '0.8rem' }}>{serverError}</p>}
      
      <div className={styles.formGroup}>
        <label htmlFor="role">Role / Title *</label>
        <input id="role" type="text" {...register('role')} placeholder="e.g. Senior Frontend Developer" />
        {errors.role && <span className={styles.errorText}>{errors.role.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="duration">Duration *</label>
        <input id="duration" type="text" {...register('duration')} placeholder="e.g. Jan 2024 — Present" />
        {errors.duration && <span className={styles.errorText}>{errors.duration.message}</span>}
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className={styles.formGroup}>
          <label htmlFor="companyName">Company Name *</label>
          <input id="companyName" type="text" {...register('companyName')} />
          {errors.companyName && <span className={styles.errorText}>{errors.companyName.message}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="companyUrl">Company URL</label>
          <input id="companyUrl" type="url" {...register('companyUrl')} />
          {errors.companyUrl && <span className={styles.errorText}>{errors.companyUrl.message}</span>}
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="companyDescription">Company Description *</label>
        <textarea id="companyDescription" rows={2} {...register('companyDescription')} placeholder="Brief description of the company..."></textarea>
        {errors.companyDescription && <span className={styles.errorText}>{errors.companyDescription.message}</span>}
      </div>

      {/* Dynamic Bullets Array */}
      <div className={styles.formGroup}>
        <div className={styles.arrayHeader}>
          <label style={{ margin: 0 }}>Responsibility Bullets *</label>
          <button type="button" onClick={() => append({ value: '' })} className={styles.btnAddItem}>
            + Add Bullet
          </button>
        </div>
        
        {fields.map((field, index) => (
          <div key={field.id} className={styles.arrayItem}>
            <div style={{ flex: 1 }}>
              <input 
                type="text" 
                {...register(`bullets.${index}.value`)} 
                placeholder={`Bullet point ${index + 1}`}
                style={{ width: '100%' }}
              />
              {errors.bullets?.[index]?.value && (
                <span className={styles.errorText}>{errors.bullets[index]?.value?.message}</span>
              )}
            </div>
            {fields.length > 1 && (
              <button type="button" onClick={() => remove(index)} className={styles.btnRemoveItem} title="Remove bullet">
                ×
              </button>
            )}
          </div>
        ))}
        {errors.bullets && !Array.isArray(errors.bullets) && (
          <span className={styles.errorText}>{errors.bullets.message}</span>
        )}
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="order">Display Order</label>
        <input id="order" type="number" {...register('order', { valueAsNumber: true })} />
        {errors.order && <span className={styles.errorText}>{errors.order.message}</span>}
      </div>
      
      <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Add CV Entry'}
      </button>
    </form>
  );
}
