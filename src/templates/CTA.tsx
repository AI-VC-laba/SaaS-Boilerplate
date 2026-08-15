import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={(
          <a
            className={`${buttonVariants({ size: 'lg' })} border-0 bg-amber-500 px-8 font-semibold text-[#0B1512] hover:bg-amber-400`}
            href="/request-access"
          >
            {t('button_text')}
            <ArrowRightIcon className="ml-1 size-5" />
          </a>
        )}
      />
    </Section>
  );
};
