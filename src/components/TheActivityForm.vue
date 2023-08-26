<template>
  <form @submit.prevent="submit" class="sticky bottom-[3.563rem] flex gap-2 border-t bg-white p-4">
    <BaseIconButton type="submit" :disabled="activity === ''">
      <PlusIcon class="h-8" />
    </BaseIconButton>
    <input
      type="text"
      class="w-full rounded border p-4 text-xl"
      placeholder="Activity name"
      v-model="activity"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import BaseIconButton from './BaseIconButton.vue'

const emit = defineEmits<{
  (e: 'addActivity', value: string): void
}>()

const activity = ref<string>('')
const submit = () => {
  emit('addActivity', activity.value)
  activity.value = ''
}
</script>
