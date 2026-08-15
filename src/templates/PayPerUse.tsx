import { useTranslations } from 'next-intl';

export const PayPerUse = () => {
  const t = useTranslations('PayPerUse');

  return (
    <section className="bg-[#0B1512] px-3 pb-16">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Разовая проверка */}
          <div className="rounded-3xl border border-amber-500/25 bg-[#0D1B15] p-8 transition-colors hover:border-amber-500/50">
            <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-amber-500/10 px-3 py-1.5">
              <span className="text-xs font-medium text-amber-400">{t('single_tag')}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{t('single_title')}</h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-black text-amber-400">{t('single_price')}</span>
              <span className="text-sm text-stone-500">{t('single_per')}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">{t('single_description')}</p>
            <a
              href="/request-access"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-semibold text-[#0B1512] transition-colors hover:bg-amber-400"
            >
              {t('single_button')}
            </a>
          </div>

          {/* API-доступ */}
          <div className="rounded-3xl border border-emerald-900/60 bg-[#0D1B15]/80 p-8 transition-colors hover:border-emerald-500/40">
            <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-1.5">
              <span className="text-xs font-medium text-emerald-400">{t('api_tag')}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{t('api_title')}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">{t('api_description')}</p>
            <a
              href="/request-access"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md border border-emerald-500/40 px-8 text-sm font-medium text-emerald-300 transition-colors hover:bg-emerald-500/10"
            >
              {t('api_button')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
