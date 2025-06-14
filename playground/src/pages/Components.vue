<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@mattverse-ui/components'
import { z } from 'zod'
</script>

<template>
  <div class="space-y-12">
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <Button size="default">Default</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </Button>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold">Inputs</h2>
      <div class="flex flex-col gap-4 w-full max-w-sm">
        <Input placeholder="Default input" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input disabled placeholder="Disabled input" />
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-bold">Form</h2>
      <Form class="space-y-8 w-full max-w-md">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input name="username" placeholder="Enter your username" />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
        </FormItem>
        
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormDescription>
            We'll never share your email with anyone else.
          </FormDescription>
        </FormItem>
        
        <div class="flex gap-4">
          <Button type="submit">Submit</Button>
          <Button type="button" variant="outline">Reset</Button>
        </div>
      </Form>
    </section>
  </div>
</template>
