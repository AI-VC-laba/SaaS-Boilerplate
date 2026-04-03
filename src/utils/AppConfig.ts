import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

import { BILLING_INTERVAL, type PricingPlan } from '@/types/Subscription';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'ИИ ВЕНЧУР ЛАБ',
  locales: [
    {
      id: 'en',
      name: 'English',
    },
    { id: 'fr', name: 'Français' },
        { id: 'ru', name: 'Русский' },
  ],
  defaultLocale: 'ru',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map(locale => locale.id);

export const PLAN_ID = {
  START: 'start',
  PRO: 'pro',
  ENTERPRISE: 'enterprise',
} as const;

export const PricingPlanList: Record<string, PricingPlan> = {
  [PLAN_ID.START]: {
    id: PLAN_ID.START,
    price: 100000,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: '',
    devPriceId: '',
    prodPriceId: '',
    features: {
      teamMember: 10,
      website: 1,
      storage: 5,
      transfer: 0,
    },
  },
  [PLAN_ID.PRO]: {
    id: PLAN_ID.PRO,
    price: 200000,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: 'price_pro_test',
    devPriceId: 'price_1PNksvKOp3DEwzQlGOXO7YBK',
    prodPriceId: '',
    features: {
      teamMember: 30,
      website: 5,
      storage: 20,
      transfer: 1,
    },
  },
  [PLAN_ID.ENTERPRISE]: {
    id: PLAN_ID.ENTERPRISE,
    price: 500000,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: 'price_enterprise_test',
    devPriceId: '',
    prodPriceId: '',
    features: {
      teamMember: -1, // -1 = unlimited
      website: -1,
      storage: -1,
      transfer: 1,
    },
  },
};
