<script setup lang="ts">
import { useSlots, computed } from 'vue'
import { cn } from '@mattverse-ui/core'

const props = defineProps<{
  class?: string
}>()

const slots = useSlots()

const className = computed(() => {
  return cn('text-sm text-muted-foreground', props.class)
})
</script>

<template>
  <p :class="className">
    <slot v-if="slots.default" />
  </p>
</template>
