<script setup lang="ts">
import { useSlots, inject } from 'vue'

const slots = useSlots()
const formItemId = inject('form-item-id', '')

defineProps<{
  name?: string
}>()
</script>

<template>
  <div class="mt-1">
    <slot v-if="slots.default" :id="formItemId" :name="name" />
  </div>
</template>
