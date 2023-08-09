<template>
  <ul class="mt-16">
    <TimelineItem
      v-for="timelineItem in timelineItems"
      :key="timelineItem.hour"
      :timelineItem="timelineItem"
    />
  </ul>
</template>

<script setup lang="ts">
import TimelineItem from '../components/TimelineItem.vue'
import type { ITimelineItem } from '../types'

interface IProps {
  timelineItems: ITimelineItem[]
}

defineProps<IProps>()
</script>
