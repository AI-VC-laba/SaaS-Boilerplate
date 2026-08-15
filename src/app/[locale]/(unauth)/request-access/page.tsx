import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { RequestAccessForm } from '@/features/landing/RequestAccessForm';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'RequestAccess',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const RequestAccessPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('RequestAccess');

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-[#0B1512] px-3 py-16 md:py-24">
        {/* Свечение */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-700/15 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              {t('title')}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-stone-400">
              {t('description')}
            </p>
          </div>

          <RequestAccessForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RequestAccessPage;
