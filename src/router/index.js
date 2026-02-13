import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CommonHistory from '@/views/CommonHistory.vue'
import AdressesWedding from '@/views/AdressesWedding.vue'
import BookingAround from '@/views/BookingAround.vue'
import DressCode from '@/views/DressCode.vue'
import PlanningWholeDay from '@/views/PlanningWholeDay.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/CommonHistory', name: 'CommonHistory', component: CommonHistory, meta: { title: 'Notre Histoire' } },
  { path: '/DressCode', name: 'DressCode', component: DressCode, meta: { title: 'Dress code' } },
  { path: '/PlanningWholeDay', name: 'PlanningWholeDay', component: PlanningWholeDay, meta: { title: 'Planning' } },
  { path: '/BookingAround', name: 'BookingAround', component: BookingAround, meta: { title: 'Réservation & alentours' } },
  { path: '/AdressesWedding', name: 'AdressesWedding', component: AdressesWedding, meta: { title: 'Adresses' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const baseTitle = document.title || 'Mariage'
router.afterEach((to) => {
  const title = to.meta && to.meta.title ? `${to.meta.title}` : baseTitle
  document.title = title
})

export default router