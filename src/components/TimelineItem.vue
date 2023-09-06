<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="selectedActivityId"
      @select="select($event)"
    />
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ITimelineItem, IOption } from '../types'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'

interface IProps {
  timelineItem: ITimelineItem
  activitySelectOptions: IOption[]
}

defineProps<IProps>()

const selectedActivityId = ref<number | null | string>(null)

const select = (value: number | null | string): void => {
  selectedActivityId.value = value
}
</script>
