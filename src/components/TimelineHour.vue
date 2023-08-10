<template>
  <a :class="classes">{{ formattedHour }}</a>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

interface IProps {
  hour: number
}

const props = defineProps<IProps>()
const { hour } = toRefs(props)

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-gray-200 px-2 font-mono text-lg',

  hour.value === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]

const formattedHour = `${hour.value.toString().padStart(2, '0')}:00`
</script>
