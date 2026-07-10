import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative overflow-hidden bg-[#0A0F1E] py-24 md:py-36">
      {/* Фоновая сетка */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Синее свечение */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Лейбл */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
            <span className="size-2 rounded-full bg-blue-400 animate-pulse" />
            {t('label')}
          </span>
        </div>

        {/* Заголовок */}
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          {t.rich('title', {
            highlight: chunks => (
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
        </h1>

        {/* Описание */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-400">
          {t('description')}
        </p>

        {/* Кнопки */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/sign-up"
            className={buttonVariants({ size: 'lg' }) + ' bg-blue-600 hover:bg-blue-500 text-white border-0 px-8'}
          >
            {t('primary_button')}
            <ArrowRightIcon className="ml-2 size-5" />
          </a>
          <a
            href="/sign-up"
            className={buttonVariants({ variant: 'outline', size: 'lg' }) + ' border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8'}
          >
            {t('secondary_button')}
          </a>
        </div>

        {/* Метрики */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: '500+', label: t('stat1_label') },
            { value: '< 1 мин', label: t('stat2_label') },
            { value: '7', label: t('stat3_label') },
            { value: 'Пилот', label: t('stat4_label') },
          ].map(stat => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-blue-400 md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
