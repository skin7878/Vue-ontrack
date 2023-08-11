<template>
  <ul class="mt-3 divide-y">
    <ActivityItem v-for="activity in activities" :key="activity" :activity="activity" />
  </ul>
</template>

<script setup lang="ts">
import ActivityItem from '@/components/ActivityItem.vue'
import type { Activities } from '@/types'

const activities: Activities[] = ['Coding', 'Reading', 'Training']
</script>
