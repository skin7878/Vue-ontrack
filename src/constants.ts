import type { NavItems } from './types'
import { PageNames } from './types'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

export const PAGE_NAMES = ['timeline', 'activities', 'progress'] as const

export const NAV_ITEMS: NavItems = {
  [PageNames.TIMELINE]: ClockIcon,
  [PageNames.ACTIVITIES]: ListBulletIcon,
  [PageNames.PROGRESS]: ChartBarIcon
}

export const HOURS_IN_DAY = 24
