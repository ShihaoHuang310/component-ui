<script setup lang="ts">
import { useSlots } from 'vue'
import { Form as VeeForm } from 'vee-validate'

const props = defineProps<{
  id?: string
  class?: string
}>()

const slots = useSlots()
</script>

<template>
  <VeeForm :id="id" :class="props.class">
    <slot v-if="slots.default" />
  </VeeForm>
</template>
