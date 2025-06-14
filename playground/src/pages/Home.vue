<script setup lang="ts">
import { Button } from '@mattverse-ui/components'
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8 text-center">
    <h1 class="text-4xl font-bold">Welcome to Mattverse UI</h1>
    <p class="text-lg text-muted-foreground max-w-[600px]">
      A Vue 3 component library based on shadcn-vue with a focus on accessibility, customization, and developer experience.
    </p>
    <div class="flex gap-4">
      <Button as-child>
        <router-link to="/components">View Components</router-link>
      </Button>
      <Button variant="outline" as-child>
        <a href="https://github.com/your-username/mattverse-ui" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </Button>
    </div>
  </div>
</template>
