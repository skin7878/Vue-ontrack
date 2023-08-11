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
  value: number
  label: string
}

export type Activities = 'Coding' | 'Reading' | 'Training'
