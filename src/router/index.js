import { createRouter, createWebHistory } from 'vue-router'

// Tes pages (à créer dans /views)
import HomeView from '@/views/HomeView.vue'
import HistoryView from '@/views/HistoryView.vue'
import InfoView from '@/views/InfoView.vue'
import RSVPView from '@/views/RSVPView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/HistoryView', component: HistoryView },
  { path: '/InfoView', component: InfoView },
  { path: '/RSVPView', component: RSVPView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router