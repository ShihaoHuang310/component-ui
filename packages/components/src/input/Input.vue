<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@mattverse-ui/core'

export interface InputProps {
  type?: string
  value?: string | number
  placeholder?: string
  disabled?: boolean
  class?: string
  id?: string
  name?: string
  required?: boolean
  autocomplete?: string
  autofocus?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
})

const emit = defineEmits(['update:value', 'input', 'change', 'focus', 'blur'])

const inputClass = computed(() => {
  return cn(
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    props.class
  )
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:value', target.value)
  emit('input', event)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<template>
  <input
    :id="id"
    :type="type"
    :name="name"
    :value="value"
    :class="inputClass"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :autocomplete="autocomplete"
    :autofocus="autofocus"
    :readonly="readonly"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>
