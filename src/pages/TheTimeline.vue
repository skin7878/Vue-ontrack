<template>
  <ul class="mt-16">
    <TimelineItem
      v-for="timelineItem in timelineItems"
      :key="timelineItem.hour"
      :timelineItem="timelineItem"
      :activity-select-options="activitySelectOptions"
    />
  </ul>
</template>

<script setup lang="ts">
import TimelineItem from '@/components/TimelineItem.vue'
import type { ITimelineItem, IOption } from '@/types'

interface IProps {
  timelineItems: ITimelineItem[]
  activitySelectOptions: IOption[]
}

defineProps<IProps>()
</script>
