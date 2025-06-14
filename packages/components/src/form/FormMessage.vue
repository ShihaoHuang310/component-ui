<script setup lang="ts">
import { useSlots, computed, inject } from 'vue'
import { cn } from '@mattverse-ui/core'
import { useField } from 'vee-validate'

const props = defineProps<{
  name?: string
  class?: string
}>()

const slots = useSlots()
const formItemId = inject('form-item-id', '')

const { errorMessage } = useField(props.name || '')

const className = computed(() => {
  return cn('text-sm font-medium text-destructive', props.class)
})
</script>

<template>
  <div v-if="errorMessage || slots.default" :class="className" role="alert">
    <slot v-if="slots.default" />
    <span v-else>{{ errorMessage }}</span>
  </div>
</template>
