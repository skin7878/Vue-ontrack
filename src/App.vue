<template>
  <TheHeader
    :is-day-complete="isDayComplete"
    @goToTimeline="goTo($event)"
    @goToProgress="goTo($event)"
  />
  <main class="flex-grow">
    <TheTimeline v-show="currentPage === PageNames.TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PageNames.ACTIVITIES" />
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
import { generateTimelineItems, normalizePageHash } from '@/functions'

const isDayComplete = ref<boolean>(false)

const currentPage = ref<string | number>(normalizePageHash())

const timelineItems = generateTimelineItems()

const goTo = (page: string | number): void => {
  currentPage.value = page
}
</script>
