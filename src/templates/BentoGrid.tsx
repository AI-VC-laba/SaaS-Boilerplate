import { useTranslations } from 'next-intl';

export const BentoGrid = () => {
  const t = useTranslations('BentoGrid');

  return (
    <section className="bg-[#0A0F1E] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Заголовок секции */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            {t('subtitle')}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t('title')}
          </h2>
        </div>

        {/* Bento сетка */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">

          {/* Большая карточка — Процесс принятия решений */}
          <div className="md:col-span-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm">
            <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-blue-500/10 px-3 py-1.5">
              <svg className="size-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-xs font-medium text-blue-400">{t('card1_tag')}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{t('card1_title')}</h3>
            <p className="mt-2 text-slate-400">{t('card1_description')}</p>
            {/* Флоу-чарт процесса */}
            <div className="mt-6 flex items-center gap-2 overflow-x-auto">
              {[t('step1'), t('step2'), t('step3'), t('step4'), t('step5')].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-xl border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-300 whitespace-nowrap">
                    {step}
                  </div>
                  {i < 4 && <div className="flex-shrink-0 text-slate-600">→</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Малая карточка — Скорость */}
          <div className="md:col-span-4 rounded-3xl border border-slate-800 bg-gradient-to-br from-blue-600/20 to-blue-800/10 p-8 backdrop-blur-sm">
            <div className="mb-4 text-4xl font-black text-white">1 мин</div>
            <h3 className="text-lg font-bold text-white">{t('card2_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('card2_description')}</p>
          </div>

          {/* Карточка — Для фондов */}
          <div className="md:col-span-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm group hover:border-blue-500/40 transition-colors">
            <div className="mb-3 text-3xl">🏗️</div>
            <h3 className="text-lg font-bold text-white">{t('card3_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('card3_description')}</p>
          </div>

          {/* Карточка — Для институтов */}
          <div className="md:col-span-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm group hover:border-blue-500/40 transition-colors">
            <div className="mb-3 text-3xl">🏛️</div>
            <h3 className="text-lg font-bold text-white">{t('card4_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('card4_description')}</p>
          </div>

          {/* Карточка — Для корпораций */}
          <div className="md:col-span-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm group hover:border-blue-500/40 transition-colors">
            <div className="mb-3 text-3xl">🏢</div>
            <h3 className="text-lg font-bold text-white">{t('card5_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('card5_description')}</p>
          </div>

          {/* Широкая карточка — Объяснимость */}
          <div className="md:col-span-12 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-950/60 to-slate-900/60 p-8 backdrop-blur-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{t('card6_title')}</h3>
                <p className="mt-2 text-slate-400 max-w-2xl">{t('card6_description')}</p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/sign-up"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  {t('card6_cta')}
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
