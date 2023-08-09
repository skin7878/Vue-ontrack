<template>
  <nav class="flex items-center justify-around sticky border-t bottom-0 z-10 text-3xl bg-white">
    <NavItem
      v-for="(icon, page) in NAV_ITEMS"
      :key="page"
      :href="`#${page}`"
      :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
      @click="emit('navigate', page)"
    >
      <component :is="icon" class="h-6" />{{ page }}
    </NavItem>
  </nav>
</template>

<script setup lang="ts">
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'

interface IProps {
  currentPage: string | number
}

defineProps<IProps>()

const emit = defineEmits<{
  (e: 'navigate', page: string | number): void
}>()
</script>
