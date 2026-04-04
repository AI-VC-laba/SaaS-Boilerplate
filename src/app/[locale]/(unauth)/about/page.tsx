import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';
import { Section } from '@/features/landing/Section';

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

  return (
    <>
      <Navbar />
      {/* Заголовок и описание */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            О проекте
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
            ИИ ВЕНЧУР ЛАБ — это ML-платформа для прозрачного первичного отбора
            стартапов. Система обеспечивает ранжирование заявок, расчёт
            скоринговой оценки и объяснимые факторы принятия решений на основе
            машинного обучения.
          </p>
        </div>
      </Section>
      {/* Контактная информация */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
            Контакты
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Telegram
              </div>
              <a
                href="https://t.me/yv_prr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                @yv_prr
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Email
              </div>
              <a
                href="mailto:yuldashev_pr@ranepa.ru"
                className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                yuldashev_pr@ranepa.ru
              </a>
            </div>
          </div>
        </div>
      </Section>
      {/* Публикации и доклады */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
            Публикации и доклады
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                РАЗВИТИЕ ФИНАНСОВОГО РЫНКА И ПРЕДПРИНИМАТЕЛЬСКИХ СТРУКТУР В
                СОВРЕМЕННЫХ УСЛОВИЯХ (РЭУ им. Г.В. Плеханова, 13.12.2024)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Доклад: "Алгоритмы машинного обучения и их применение в
                инвестиционной сфере"
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                Конференция ИГСУ РАНХиГС ( 19-23 мая 2025)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Доклад: "Анализ факторов успешности стартапов с
                использованием интеллектуальных алгоритмов: эмпирические
                результаты для российского рынка"
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                X Международная научно-практическая конференция (МГУ, 26.05.2025)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Доклад: "Методические подходы к управлению венчурными
                инвестициями на развивающихся рынках в условиях цифровой
                трансформации"
              </p>
            </div>
          </div>
        </div>
      </Section>
      {/* Дополнительная информация */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Сотрудничество
          </h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Заинтересованы в использовании платформы для вашего фонда или
            акселератора? Свяжитесь со мной для обсуждения возможностей
            сотрудничества.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Платформа находится в стадии активной разработки. MVP проходит
            пилотное тестирование.
          </p>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default AboutPage;
