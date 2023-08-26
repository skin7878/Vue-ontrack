<template>
  <TheHeader
    :is-day-complete="isDayComplete"
    @goToTimeline="goTo($event)"
    @goToProgress="goTo($event)"
  />
  <main class="flex flex-col grow">
    <TheTimeline
      v-show="currentPage === PageNames.TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PageNames.ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @add-activity="addActivity"
    />
    <TheProgress v-show="currentPage === PageNames.PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { PageNames } from '@/types'
import type { IActivities } from '@/types'
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheProgress from '@/pages/TheProgress.vue'
import {
  generateTimelineItems,
  normalizePageHash,
  generateActivitySelectOptions,
  generateActivities,
  createId
} from '@/functions'

const isDayComplete = ref<boolean>(false)

const currentPage = ref<string | number>(normalizePageHash())

const timelineItems = generateTimelineItems()

let activities = ref<IActivities[]>(generateActivities())

const activitySelectOptions = generateActivitySelectOptions(activities.value)

const deleteActivity = (value: IActivities) => {
  activities.value = activities.value.filter((activity) => activity.id !== value.id)
}

const addActivity = async (value: string) => {
  activities.value.push({
    id: createId(),
    name: value,
    secondsToComplete: 0
  })

  await nextTick()

  window.scrollTo({
    behavior: 'smooth',
    top: document.body.scrollHeight
  })
}

const goTo = (page: string | number): void => {
  currentPage.value = page
}
</script>
