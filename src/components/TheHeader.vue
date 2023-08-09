<template>
  <header
    class="flex justify-center sm:justify-between items-center flex-wrap gap-3 py-3 px-5 sticky top-0 left-0 border-b z-10 bg-white"
  >
    <a :href="`#${PageNames.TIMELINE}`" @click="emit('goToTimeline', PageNames.TIMELINE)">
      <img src="../assets/img/logo.png" alt="logo" class="h-9" />
    </a>
    <div class="flex items-center gap-2" v-if="isDayComplete">
      <CheckCircleIcon class="h-7 text-green-500" />
      <span class="whitespace-nowrap text-sm">Day Complete!</span>
    </div>

    <a
      class="flex items-center gap-2"
      :href="`#${PageNames.PROGRESS}`"
      @click="emit('goToProgress', PageNames.PROGRESS)"
      v-else
    >
      Progress: <span class="font-mono">20%</span
      ><span class="w-4 h-4 rounded-full bg-red-600"></span>
    </a>
  </header>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { PageNames } from '../types'

const emit = defineEmits<{
  (e: 'goToTimeline', page: string): void
  (e: 'goToProgress', page: string): void
}>()
defineProps({
  isDayComplete: Boolean
})
</script>
