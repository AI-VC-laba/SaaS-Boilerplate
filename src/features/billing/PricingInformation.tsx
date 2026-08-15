import { useTranslations } from 'next-intl';

import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { PricingPlanList } from '@/utils/AppConfig';

export const PricingInformation = (props: {
  buttonList: Record<string, React.ReactNode>;
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      {Object.values(PricingPlanList).map(plan => (
        <PricingCard
          key={plan.id}
          planId={plan.id}
          price={plan.price}
          interval={plan.interval}
          button={props.buttonList[plan.id]}
        >
          {plan.id !== 'enterprise'
            ? (
                <>
                  <PricingFeature>
                    {t('feature_team_member', { number: plan.features.teamMember })}
                  </PricingFeature>
                  <PricingFeature>
                    {t('feature_projects', { number: plan.features.projects })}
                  </PricingFeature>
                  <PricingFeature>
                    {t('feature_storage', { number: plan.features.storage })}
                  </PricingFeature>
                  {plan.features.api && (
                    <PricingFeature>{t('feature_api')}</PricingFeature>
                  )}
                  <PricingFeature>{t('feature_support')}</PricingFeature>
                </>
              )
            : (
                <>
                  <PricingFeature>{t('feature_unlimited_projects')}</PricingFeature>
                  <PricingFeature>{t('feature_unlimited_storage')}</PricingFeature>
                  <PricingFeature>{t('feature_api')}</PricingFeature>
                  <PricingFeature>{t('feature_support_247')}</PricingFeature>
                  <PricingFeature>{t('feature_custom')}</PricingFeature>
                </>
              )}
        </PricingCard>
      ))}
    </div>
  );
};
