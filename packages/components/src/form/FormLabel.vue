<script setup lang="ts">
import { useSlots, inject, computed } from 'vue'
import { cn } from '@mattverse-ui/core'

const props = defineProps<{
  for?: string
  class?: string
}>()

const slots = useSlots()
const formItemId = inject('form-item-id', '')

const className = computed(() => {
  return cn(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    props.class
  )
})
</script>

<template>
  <label :for="props.for || formItemId" :class="className">
    <slot v-if="slots.default" />
  </label>
</template>
