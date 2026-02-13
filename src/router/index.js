import { createRouter, createWebHistory } from 'vue-router'

// Tes pages (à créer dans /views)
import HomeView from '@/views/HomeView.vue'
import CommonHistory from '@/views/CommonHistory.vue'
import AdressesWedding from '@/views/AdressesWedding.vue'
import BookingAround from '@/views/BookingAround.vue'
import DressCode from '@/views/DressCode.vue'
import PlanningWholeDay from '@/views/PlanningWholeDay.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/CommonHistory', component: CommonHistory },
  { path: '/DressCode', component: DressCode },
  { path: '/PlanningWholeDay', component: PlanningWholeDay },
  { path: '/BookingAround', component: BookingAround },
  { path: '/AdressesWedding', component: AdressesWedding },
]
//test
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
