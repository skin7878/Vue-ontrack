<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <a :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
    <BaseSelect :options="options" placeholder="Rest" :is-available-id="isAvailableId" />
  </li>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { ITimelineItem, IOption } from '../types'
import BaseSelect from './BaseSelect.vue'

interface IProps {
  timelineItem: ITimelineItem
}

const props = defineProps<IProps>()
const { timelineItem } = toRefs(props)

const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-gray-200 px-2 font-mono text-lg',

  timelineItem.value.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]

const options: IOption[] = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const isAvailableId = 3
</script>
