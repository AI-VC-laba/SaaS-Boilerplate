import { useTranslations } from 'next-intl';
import React from 'react';

import type { BillingInterval } from '@/types/Subscription';

export const PricingCard = (props: {
  planId: string;
  price: number;
  interval: BillingInterval;
  button: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('PricingPlan');

  const formattedPrice = new Intl.NumberFormat('ru-RU').format(props.price);
  const isFeatured = props.planId === 'premium';

  return (
    <div className={`rounded-2xl border px-6 py-8 text-center transition-colors ${
      isFeatured
        ? 'border-amber-500/50 bg-[#0D1B15] shadow-[0_0_50px_-12px_rgba(217,169,44,0.25)]'
        : 'border-border bg-card'
    }`}
    >
      <div className="text-lg font-semibold">
        {t(`${props.planId}_plan_name`)}
      </div>

      <div className="mt-3 flex items-center justify-center">
        <div className="text-5xl font-bold">
          {`₽${formattedPrice}`}
        </div>

        <div className="ml-1 text-muted-foreground">
          {`/ ${props.interval === 'month' ? t('plan_interval_month') : t('plan_interval_year')}`}
        </div>
      </div>

      <div className="mt-2 text-sm text-muted-foreground">
        {t(`${props.planId}_plan_description`)}
      </div>

      {props.button}

      <ul className="mt-8 space-y-3 text-left">{props.children}</ul>
    </div>
  );
};
