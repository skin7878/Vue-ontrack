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
      :activities="activities"
      @set-time-line-item-activity="setTimeLineItemActivity"
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
import { ref, nextTick, computed } from 'vue'
import { PageNames } from '@/types'
import type { IActivity, IOption, ITimeLineItemActivity } from '@/types'
import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheProgress from '@/pages/TheProgress.vue'
import {
  generateTimelineItems,
  normalizePageHash,
  generateActivitySelectOptions,
  generateActivities
} from '@/functions'

const isDayComplete = ref<boolean>(false)

const currentPage = ref<string | number>(normalizePageHash())

const timelineItems = generateTimelineItems()

let activities = ref<IActivity[]>(generateActivities())

const activitySelectOptions = computed((): IOption[] =>
  generateActivitySelectOptions(activities.value)
)

const deleteActivity = (value: IActivity): void => {
  activities.value = activities.value.filter((activity) => activity.id !== value.id)
}

const addActivity = async (value: IActivity): Promise<void> => {
  activities.value.push(value)

  await nextTick()

  window.scrollTo({
    behavior: 'smooth',
    top: document.body.scrollHeight
  })
}

const setTimeLineItemActivity = ({ timelineItem, activity }: ITimeLineItemActivity): void => {
  timelineItem.activityID = activity!.id
}

const goTo = (page: string | number): void => {
  currentPage.value = page
}
</script>
