<template>
  <button
    :class="`${typeClasses[typeClass]} rounded disabled:cursor-not-allowed disabled:opacity-50 p-3`"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_DANGER, BUTTON_TYPE_PRIMARY } from '../constants'
interface TypeClasses {
  [key: string]: string
}
const typeClasses: TypeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE_PRIMARY]: 'bg-purple-500 enabled:hover:bg-purple-600 text-white'
}
</script>

<script setup lang="ts">
interface IProps {
  typeClass?: string
}

withDefaults(defineProps<IProps>(), {
  typeClass: 'primary'
})
</script>
