<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseIconButton :typeClass="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseIconButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="h:mm"
        :options="periodSelectOptions"
        :selected="secondsToComplete"
        @select="select($event)"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseIconButton from './BaseIconButton.vue'
import BaseSelect from './BaseSelect.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import type { IOption, IActivity } from '../types'
import { BUTTON_TYPE_DANGER } from '../constants'

interface IProps {
  activity: IActivity
}

defineProps<IProps>()

const emit = defineEmits<{
  (e: 'delete'): void
}>()

const periodSelectOptions: IOption[] = [
  { value: 15 * 60, label: '0:15' },
  { value: 30 * 60, label: '0:30' },
  { value: 45 * 60, label: '0:45' }
]

const secondsToComplete = ref<number | null | string>(null)

const select = (value: number | null | string): void => {
  secondsToComplete.value = value
}
</script>
