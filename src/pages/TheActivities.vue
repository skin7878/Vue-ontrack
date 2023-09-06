<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @add-activity="addActivity" />
  </div>
</template>

<script setup lang="ts">
import ActivityItem from '@/components/ActivityItem.vue'
import TheActivityForm from '@/components/TheActivityForm.vue'
import TheActivitiesEmptyState from '@/components/TheActivitiesEmptyState.vue'
import type { IActivities } from '@/types'

interface IProps {
  activities: IActivities[]
}

defineProps<IProps>()

const emit = defineEmits<{
  (e: 'deleteActivity', value: IActivities): void
  (e: 'addActivity', value: IActivities): void
}>()

const addActivity = (value: IActivities) => {
  emit('addActivity', value)
}
</script>
