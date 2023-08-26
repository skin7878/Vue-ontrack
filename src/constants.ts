import type { NavItems } from './types'
import { PageNames } from './types'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

export const PAGE_NAMES = ['timeline', 'activities', 'progress'] as const

export const NAV_ITEMS: NavItems = {
  [PageNames.TIMELINE]: ClockIcon,
  [PageNames.ACTIVITIES]: ListBulletIcon,
  [PageNames.PROGRESS]: ChartBarIcon
} as const

export const HOURS_IN_DAY = 24

export const BUTTON_TYPE_NEUTRAL = 'neutral'

export const BUTTON_TYPE_DANGER = 'danger'

export const BUTTON_TYPE_PRIMARY = 'primary'

export const SECONDS_IN_HOUR = 3600
