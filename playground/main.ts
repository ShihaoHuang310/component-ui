import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './src/styles/globals.css'

// Routes
import Components from './src/pages/Components.vue'
import Home from './src/pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/components', component: Components }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
