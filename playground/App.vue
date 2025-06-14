<template>
  <div class="min-h-screen bg-background">
    <header class="border-b">
      <div class="container flex h-16 items-center">
        <h1 class="text-xl font-bold">Mattverse UI</h1>
        <nav class="ml-auto flex gap-6">
          <router-link to="/" class="text-sm font-medium transition-colors hover:text-primary">
            Home
          </router-link>
          <router-link to="/components" class="text-sm font-medium transition-colors hover:text-primary">
            Components
          </router-link>
        </nav>
      </div>
    </header>
    <main class="container py-8">
      <router-view />
    </main>
  </div>
</template>
