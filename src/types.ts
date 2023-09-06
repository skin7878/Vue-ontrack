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
}

export interface IOption {
  value: number | string
  label: string
}

export interface IActivities {
  id: string
  name: string
  secondsToComplete: number
}
