<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityID"
      @select="selectActivity($event)"
    />
  </li>
</template>

<script setup lang="ts">
import type { ITimelineItem, IOption, IActivity } from '../types'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'

interface IProps {
  timelineItem: ITimelineItem
  activitySelectOptions: IOption[]
  activities: IActivity[]
}

const props = defineProps<IProps>()

const emit = defineEmits<{
  (e: 'selectActivity', value: IActivity | undefined): void
}>()

const selectActivity = (id: number | null | string): void => {
  emit(
    'selectActivity',
    props.activities.find((activity) => activity.id === id)
  )
}
</script>
