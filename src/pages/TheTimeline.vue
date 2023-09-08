<template>
  <ul class="mt-16">
    <TimelineItem
      v-for="timelineItem in timelineItems"
      :key="timelineItem.hour"
      :timelineItem="timelineItem"
      :activity-select-options="activitySelectOptions"
      :activities="activities"
      @select-activity="setTimeLineItemActivity(timelineItem, $event)"
    />
  </ul>
</template>

<script setup lang="ts">
import TimelineItem from '@/components/TimelineItem.vue'
import type { ITimelineItem, IOption, IActivity, ITimeLineItemActivity } from '@/types'

interface IProps {
  timelineItems: ITimelineItem[]
  activitySelectOptions: IOption[]
  activities: IActivity[]
}

defineProps<IProps>()

const emit = defineEmits<{
  (e: 'setTimeLineItemActivity', value: ITimeLineItemActivity): void
}>()

const setTimeLineItemActivity = (timelineItem: ITimelineItem, activity: IActivity | undefined) => {
  emit('setTimeLineItemActivity', { timelineItem, activity })
}
</script>
