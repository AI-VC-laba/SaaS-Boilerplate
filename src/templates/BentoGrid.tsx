import { useTranslations } from 'next-intl';

const cardClass
  = 'rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-colors hover:border-blue-500/40';

export const BentoGrid = () => {
  const t = useTranslations('BentoGrid');

  const steps = [
    t('step1'),
    t('step2'),
    t('step3'),
    t('step4'),
    t('step5'),
    t('step6'),
  ];

  const factors = [
    { label: t('factor_team'), value: 82 },
    { label: t('factor_market'), value: 74 },
    { label: t('factor_tech'), value: 68 },
    { label: t('factor_traction'), value: 57 },
  ];

  const ranking = [
    { name: 'Alpha', score: '0.92', top: true },
    { name: 'Beta', score: '0.87', top: false },
    { name: 'Gamma', score: '0.81', top: false },
  ];

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

        {/* Bento-сетка */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">

          {/* Процесс принятия решений — большая карточка */}
          <div className={`md:col-span-8 ${cardClass}`}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-blue-500/10 px-3 py-1.5">
              <svg className="size-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-xs font-medium text-blue-400">{t('process_tag')}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{t('process_title')}</h3>
            <p className="mt-2 text-slate-400">{t('process_description')}</p>
            {/* Флоу-чарт процесса */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="flex-shrink-0 whitespace-nowrap rounded-xl border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-300">
                    {step}
                  </div>
                  {i < steps.length - 1 && <div className="flex-shrink-0 text-slate-600">→</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Скорость оценки */}
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-blue-600/20 to-blue-800/10 p-8 backdrop-blur-sm transition-colors hover:border-blue-500/40 md:col-span-4">
            <div className="text-4xl font-black text-white">{t('speed_value')}</div>
            <h3 className="mt-2 text-lg font-bold text-white">{t('speed_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('speed_description')}</p>
            {/* Индикатор прогресса */}
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            </div>
          </div>

          {/* Факторный анализ */}
          <div className={`md:col-span-4 ${cardClass}`}>
            <h3 className="text-lg font-bold text-white">{t('factors_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('factors_description')}</p>
            <div className="mt-6 space-y-4">
              {factors.map(factor => (
                <div key={factor.label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-slate-300">{factor.label}</span>
                    <span className="font-semibold text-blue-400">{factor.value}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      style={{ width: `${factor.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ранжирование заявок */}
          <div className={`md:col-span-4 ${cardClass}`}>
            <h3 className="text-lg font-bold text-white">{t('ranking_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('ranking_description')}</p>
            <div className="mt-6 space-y-2">
              {ranking.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2.5 ${
                    item.top
                      ? 'border-blue-500/30 bg-blue-500/10'
                      : 'border-slate-800 bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex size-6 items-center justify-center rounded-md text-xs font-bold ${item.top ? 'bg-blue-500/20 text-blue-300' : 'bg-slate-800 text-slate-400'}`}>
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-200">{item.name}</span>
                  </div>
                  <span className={`text-sm font-semibold ${item.top ? 'text-blue-300' : 'text-slate-400'}`}>
                    {item.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Точность модели */}
          <div className={`md:col-span-4 ${cardClass}`}>
            <div className="text-4xl font-black text-white">{t('accuracy_value')}</div>
            <h3 className="mt-2 text-lg font-bold text-white">{t('accuracy_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('accuracy_description')}</p>
            {/* Мини-спарклайн */}
            <div className="mt-6 flex h-12 items-end gap-1.5">
              {[35, 50, 42, 64, 58, 78, 82].map(height => (
                <div
                  key={height}
                  className="flex-1 rounded-sm bg-gradient-to-t from-blue-600/40 to-cyan-400/60"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Аудитории */}
          <div className={`md:col-span-4 ${cardClass}`}>
            <div className="mb-3 text-3xl">🏗️</div>
            <h3 className="text-lg font-bold text-white">{t('audience1_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('audience1_description')}</p>
          </div>

          <div className={`md:col-span-4 ${cardClass}`}>
            <div className="mb-3 text-3xl">🏛️</div>
            <h3 className="text-lg font-bold text-white">{t('audience2_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('audience2_description')}</p>
          </div>

          <div className={`md:col-span-4 ${cardClass}`}>
            <div className="mb-3 text-3xl">🏢</div>
            <h3 className="text-lg font-bold text-white">{t('audience3_title')}</h3>
            <p className="mt-2 text-sm text-slate-400">{t('audience3_description')}</p>
          </div>

          {/* Объяснимость — широкая карточка */}
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-950/60 to-slate-900/60 p-8 backdrop-blur-sm md:col-span-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{t('xai_title')}</h3>
                <p className="mt-2 max-w-2xl text-slate-400">{t('xai_description')}</p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/sign-up"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  {t('xai_cta')}
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
