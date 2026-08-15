'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { submitAccessRequest } from '@/features/landing/requestAccess';

const inputClass
  = 'w-full rounded-xl border border-emerald-900/60 bg-[#0D1B15] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-amber-500/60';

const labelClass = 'mb-1.5 block text-sm font-medium text-stone-300';

export const RequestAccessForm = () => {
  const t = useTranslations('RequestAccess');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setIsSubmitting(true);
    try {
      const result = await submitAccessRequest({
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        telegram: String(formData.get('telegram') || ''),
        organization: String(formData.get('organization') || ''),
        role: String(formData.get('role') || ''),
        message: String(formData.get('message') || ''),
      });
      setStatus(result.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-amber-500/30 bg-[#0D1B15] p-10 text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-amber-500/15">
          <svg className="size-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white">{t('success_title')}</h2>
        <p className="mx-auto mt-3 max-w-md text-stone-400">{t('success_description')}</p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md border border-emerald-500/40 px-6 py-2.5 text-sm font-medium text-emerald-300 transition-colors hover:bg-emerald-500/10"
        >
          {t('back')}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-emerald-900/60 bg-[#0D1B15]/80 p-6 backdrop-blur-sm md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>{t('name_label')}</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t('name_placeholder')}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>{t('email_label')}</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t('email_placeholder')}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="telegram" className={labelClass}>{t('telegram_label')}</label>
          <input
            id="telegram"
            name="telegram"
            type="text"
            placeholder={t('telegram_placeholder')}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="organization" className={labelClass}>{t('organization_label')}</label>
          <input
            id="organization"
            name="organization"
            type="text"
            placeholder={t('organization_placeholder')}
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="role" className={labelClass}>{t('role_label')}</label>
          <select id="role" name="role" className={inputClass} defaultValue="fund">
            <option value="fund">{t('role_fund')}</option>
            <option value="accelerator">{t('role_accelerator')}</option>
            <option value="institution">{t('role_institution')}</option>
            <option value="corporate">{t('role_corporate')}</option>
            <option value="other">{t('role_other')}</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>{t('message_label')}</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={t('message_placeholder')}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {t('error')}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-amber-500 px-8 text-sm font-semibold text-[#0B1512] transition-colors hover:bg-amber-400 disabled:opacity-60"
      >
        {isSubmitting ? t('submitting') : t('submit')}
      </button>
    </form>
  );
};
