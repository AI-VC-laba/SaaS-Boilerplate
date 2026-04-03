import { useTranslations } from 'next-intl';

import { PricingCard } from '@/features/billing/PricingCard';
import { PricingFeature } from '@/features/billing/PricingFeature';
import { PLAN_ID, PricingPlanList } from '@/utils/AppConfig';

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
          {/* Старт */}
          {plan.id === PLAN_ID.START && (
            <>
              <PricingFeature>{t('feature_assessments_start')}</PricingFeature>
              <PricingFeature>{t('feature_analytics_basic')}</PricingFeature>
              <PricingFeature>{t('feature_support_email')}</PricingFeature>
              <PricingFeature>{t('feature_reports_standard')}</PricingFeature>
            </>
          )}

          {/* Профи */}
          {plan.id === PLAN_ID.PRO && (
            <>
              <PricingFeature>{t('feature_assessments_pro')}</PricingFeature>
              <PricingFeature>{t('feature_analytics_advanced')}</PricingFeature>
              <PricingFeature>{t('feature_support_priority')}</PricingFeature>
              <PricingFeature>{t('feature_reports_custom')}</PricingFeature>
              <PricingFeature>{t('feature_api_access')}</PricingFeature>
            </>
          )}

          {/* Энтерпрайз */}
          {plan.id === PLAN_ID.ENTERPRISE && (
            <>
              <PricingFeature>{t('feature_assessments_unlimited')}</PricingFeature>
              <PricingFeature>{t('feature_sla_dedicated')}</PricingFeature>
              <PricingFeature>{t('feature_reports_whitelabel')}</PricingFeature>
              <PricingFeature>{t('feature_api_access')}</PricingFeature>
              <PricingFeature>{t('feature_integration_custom')}</PricingFeature>
              <PricingFeature>{t('feature_manager_personal')}</PricingFeature>
            </>
          )}
        </PricingCard>
      ))}
    </div>
  );
};
