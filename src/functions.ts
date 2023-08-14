import { HOURS_IN_DAY } from './constants'
import type { ITimelineItem, Activities } from './types'
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

export const generateActivitySelectOptions = (activities: Activities[]) => {
  return activities.map((label, value) => ({ label, value }))
}
