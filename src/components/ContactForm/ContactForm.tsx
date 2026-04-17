'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactSchema } from '@/lib/schemas';
import { submitContactForm } from '@/app/actions/contact';
import { z } from 'zod';
import styles from '../ContactSection/ContactSection.module.css';

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setErrorMessage('');
    
    // Server action
    const result = await submitContactForm(data);
    
    if (result.success) {
      setStatus('success');
      reset();
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong.');
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div aria-live="polite" className="mb-4">
        {status === 'success' && (
          <div className="p-3 mb-4 text-sm text-green-300 bg-green-900/40 border border-green-800 rounded">
            Thank you! Your message has been successfully sent.
          </div>
        )}
        {status === 'error' && (
          <div className="p-3 mb-4 text-sm text-red-300 bg-red-900/40 border border-red-800 rounded">
            {errorMessage}
          </div>
        )}
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            {...register('firstName')}
            aria-invalid={errors.firstName ? 'true' : 'false'}
            disabled={status === 'submitting'}
          />
          {errors.firstName && <span className="text-red-400 text-xs mt-1 block">{errors.firstName.message}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            {...register('lastName')}
            aria-invalid={errors.lastName ? 'true' : 'false'}
            disabled={status === 'submitting'}
          />
          {errors.lastName && <span className="text-red-400 text-xs mt-1 block">{errors.lastName.message}</span>}
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          disabled={status === 'submitting'}
        />
        {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          placeholder="Project Inquiry / Collaboration"
          {...register('subject')}
          disabled={status === 'submitting'}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project or opportunity…"
          {...register('message')}
          aria-invalid={errors.message ? 'true' : 'false'}
          disabled={status === 'submitting'}
        ></textarea>
        {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
      </div>
      <button 
        type="submit" 
        className={styles.btnSend} 
        disabled={status === 'submitting'}
        aria-disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  );
}
