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
import type { IActivity } from '@/types'

interface IProps {
  activities: IActivity[]
}

defineProps<IProps>()

const emit = defineEmits<{
  (e: 'deleteActivity', value: IActivity): void
  (e: 'addActivity', value: IActivity): void
}>()

const addActivity = (value: IActivity) => {
  emit('addActivity', value)
}
</script>
