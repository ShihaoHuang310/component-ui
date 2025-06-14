<script setup lang="ts">
import { useSlots, provide, computed, ref } from 'vue'
import { cn } from '@mattverse-ui/core'

const props = defineProps<{
  class?: string
}>()

const slots = useSlots()
const formItemId = ref(`form-item-${Math.random().toString(36).substring(2, 11)}`)

// Provide context to child components
provide('form-item-id', formItemId)

const className = computed(() => {
  return cn('space-y-2', props.class)
})
</script>

<template>
  <div :class="className">
    <slot v-if="slots.default" />
  </div>
</template>
