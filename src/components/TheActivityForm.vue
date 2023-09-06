<template>
  <form @submit.prevent="submit" class="sticky bottom-[3.563rem] flex gap-2 border-t bg-white p-4">
    <BaseIconButton type="submit" :disabled="name === ''">
      <PlusIcon class="h-8" />
    </BaseIconButton>
    <input
      type="text"
      class="w-full rounded border p-4 text-xl"
      placeholder="Activity name"
      v-model.trim="name"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import BaseIconButton from '@/components/BaseIconButton.vue'
import type { IActivities } from '@/types'
import { createId } from '@/functions'

const emit = defineEmits<{
  (e: 'addActivity', value: IActivities): void
}>()

const name = ref<string>('')

const submit = () => {
  emit('addActivity', {
    id: createId(),
    name: name.value,
    secondsToComplete: 0
  } as IActivities)
  name.value = ''
}
</script>
