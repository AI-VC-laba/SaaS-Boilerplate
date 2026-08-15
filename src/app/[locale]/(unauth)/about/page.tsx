import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const AboutPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('About');

  return (
    <div className="bg-[#0B1512]">
      <Navbar />

      {/* Заголовок и описание */}
      <section className="relative overflow-hidden px-3 py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-700/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-6 text-lg leading-relaxed text-stone-400">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* Контакты */}
      <section className="px-3 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">
            {t('contacts_title')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-emerald-900/60 bg-[#0D1B15]/80 p-6">
              <div className="mb-2 text-sm font-semibold text-stone-500">
                Telegram
              </div>
              <a
                href="https://t.me/yv_prr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-amber-400 hover:underline"
              >
                @yv_prr
              </a>
            </div>
            <div className="rounded-3xl border border-emerald-900/60 bg-[#0D1B15]/80 p-6">
              <div className="mb-2 text-sm font-semibold text-stone-500">
                Email
              </div>
              <a
                href="mailto:yuldashev_pr@ranepa.ru"
                className="text-lg font-medium text-amber-400 hover:underline"
              >
                yuldashev_pr@ranepa.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Публикации и доклады */}
      <section className="px-3 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">
            {t('publications_title')}
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="mb-2 text-lg font-bold text-white">
                {t('pub1_title')}
              </h3>
              <p className="text-stone-400">
                {t('pub1_desc')}
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="mb-2 text-lg font-bold text-white">
                {t('pub2_title')}
              </h3>
              <p className="text-stone-400">
                {t('pub2_desc')}
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="mb-2 text-lg font-bold text-white">
                {t('pub3_title')}
              </h3>
              <p className="text-stone-400">
                {t('pub3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Сотрудничество */}
      <section className="px-3 pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-[#0D1B15] p-10 text-center">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[240px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white">
                {t('cooperation_title')}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-stone-400">
                {t('cooperation_description')}
              </p>
              <p className="mt-4 text-sm text-stone-500">
                {t('cooperation_note')}
              </p>
              <a
                href="/request-access"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-amber-500 px-8 text-sm font-semibold text-[#0B1512] transition-colors hover:bg-amber-400"
              >
                {t('cooperation_cta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
