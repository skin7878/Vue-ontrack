import { HOURS_IN_DAY, SECONDS_IN_HOUR } from './constants'
import type { ITimelineItem, IActivities } from './types'
import { PageNames } from './types'

export const generateTimelineItems = (): ITimelineItem[] => {
  const timelineItems: ITimelineItem[] = []

  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}

export const normalizePageHash = (): string => {
  const hash = window.location.hash.slice(1)

  if (!Object.values(PageNames).includes(hash as PageNames)) {
    window.location.hash = PageNames.TIMELINE
    return PageNames.TIMELINE
  }

  return hash
}

export const generateActivitySelectOptions = (activities: IActivities[]) => {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}

export const createId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export const generateActivities = (): IActivities[] => {
  return [
    {
      id: createId(),
      name: 'Coding',
      secondsToComplete: 0 * SECONDS_IN_HOUR
    },
    {
      id: createId(),
      name: 'Reading',
      secondsToComplete: 2 * SECONDS_IN_HOUR
    },
    {
      id: createId(),
      name: 'Training',
      secondsToComplete: 3 * SECONDS_IN_HOUR
    }
  ]
}
