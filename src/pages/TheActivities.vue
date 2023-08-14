<template>
  <ul class="mt-3 divide-y">
    <ActivityItem
      v-for="activity in activities"
      :key="activity"
      :activity="activity"
      @delete="emit('deleteActivity', activity)"
    />
  </ul>
</template>

<script setup lang="ts">
import ActivityItem from '@/components/ActivityItem.vue'
import type { Activities } from '@/types'

interface IProps {
  activities: Activities[]
}

defineProps<IProps>()
const emit = defineEmits<{
  (e: 'deleteActivity', value: Activities): void
}>()
</script>
