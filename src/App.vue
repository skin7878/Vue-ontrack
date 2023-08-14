<template>
  <TheHeader
    :is-day-complete="isDayComplete"
    @goToTimeline="goTo($event)"
    @goToProgress="goTo($event)"
  />
  <main class="flex-grow">
    <TheTimeline
      v-show="currentPage === PageNames.TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PageNames.ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
    />
    <TheProgress v-show="currentPage === PageNames.PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PageNames } from '@/types'
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheProgress from '@/pages/TheProgress.vue'
import {
  generateTimelineItems,
  normalizePageHash,
  generateActivitySelectOptions
} from '@/functions'
import type { Activities } from '@/types'

const isDayComplete = ref<boolean>(false)

const currentPage = ref<string | number>(normalizePageHash())

const timelineItems = generateTimelineItems()

let activities = ref<Activities[]>(['Coding', 'Reading', 'Training'])

const activitySelectOptions = generateActivitySelectOptions(activities.value)

const deleteActivity = (value: Activities) => {
  activities.value = activities.value.filter((activity) => activity !== value)
}

const goTo = (page: string | number): void => {
  currentPage.value = page
}
</script>
