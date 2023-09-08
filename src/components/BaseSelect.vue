<template>
  <div class="flex gap-2">
    <BaseIconButton :typeClass="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <XMarkIcon class="h-8" />
    </BaseIconButton>
    <select
      class="w-full truncate rounded py-1 px-2 bg-gray-100 text-2xl"
      @change="select(($event.target as HTMLInputElement).value)"
    >
      <option :selected="isNotSelected" disabled>{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseIconButton from './BaseIconButton.vue'
import type { IOption } from '../types'
import { BUTTON_TYPE_NEUTRAL } from '../constants'

interface IProps {
  options: IOption[]
  placeholder: string
  selected: number | null | string
}

const props = defineProps<IProps>()

const emit = defineEmits<{
  (e: 'select', value: number | null | string): void
}>()

const select = (value: number | null | string): void => {
  value === null || isNaN(+value) ? emit('select', value) : emit('select', +value)
}

const isNotSelected = computed(() => props.selected === null)
</script>
