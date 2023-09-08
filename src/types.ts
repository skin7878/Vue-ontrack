import type { Component } from 'vue'

export type NavItems = {
  [key: string]: Component
}

export enum PageNames {
  'TIMELINE' = 'timeline',
  'ACTIVITIES' = 'activities',
  'PROGRESS' = 'progress'
}

export interface ITimelineItem {
  hour: number
  activityID: number | null | string
}

export interface IOption {
  value: number | string
  label: string
}

export interface IActivity {
  id: string | string
  name: string
  secondsToComplete: number
}

export interface ITimeLineItemActivity {
  timelineItem: ITimelineItem
  activity: IActivity | undefined
}
