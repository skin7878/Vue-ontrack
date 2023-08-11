<template>
  <div class="flex gap-2">
    <BaseIconButton @click="resetValue">
      <XMarkIcon class="h-8" />
    </BaseIconButton>
    <select class="w-full truncate rounded py-1 px-2 bg-gray-100 text-2xl" @change="updateValue">
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

interface IProps {
  options: IOption[]
  placeholder: string
  selected: number | null
}

const props = defineProps<IProps>()

const emit = defineEmits<{
  (e: 'select', value: number | null): void
}>()

const updateValue = (e: Event) => emit('select', +(e.target as HTMLInputElement).value)
const resetValue = () => emit('select', null)

const isNotSelected = computed(() => props.selected === null)
</script>
