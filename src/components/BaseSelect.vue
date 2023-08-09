<template>
  <div class="flex gap-2">
    <BaseIconButton>
      <XMarkIcon class="h-8" />
    </BaseIconButton>
    <select class="w-full truncate rounded py-1 px-2 bg-gray-100 text-2xl">
      <option value="" selected disabled>{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === isAvailableId"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseIconButton from './BaseIconButton.vue'
import type { IOption } from '../types'

interface IProps {
  options: IOption[]
  placeholder: string
  isAvailableId?: number
}

defineProps<IProps>()
</script>
