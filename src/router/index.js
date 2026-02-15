import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CommonHistory from '@/views/CommonHistory.vue'
import AdressesWedding from '@/views/AdressesWedding.vue'
import BookingAround from '@/views/BookingAround.vue'
import DressCode from '@/views/DressCode.vue'
import PlanningWholeDay from '@/views/PlanningWholeDay.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: HomeView,
    meta: { 
      title: 'Notre Mariage - Une Belle Aventure',
      description: 'Découvrez notre histoire d\'amour et les détails de notre mariage. Consultez le programme, le dress code, les adresses et les informations pratiques.'
    }
  },
  { 
    path: '/CommonHistory', 
    name: 'CommonHistory', 
    component: CommonHistory, 
    meta: { 
      title: 'Notre Histoire | Mariage',
      description: 'Découvrez comment nous nous sommes rencontrés et notre belle histoire d\'amour.'
    }
  },
  { 
    path: '/DressCode', 
    name: 'DressCode', 
    component: DressCode, 
    meta: { 
      title: 'Dress Code | Mariage',
      description: 'Consultez nos recommandations de tenue pour notre mariage.'
    }
  },
  { 
    path: '/PlanningWholeDay', 
    name: 'PlanningWholeDay', 
    component: PlanningWholeDay, 
    meta: { 
      title: 'Programme du Jour | Mariage',
      description: 'Découvrez le planning détaillé de notre journée de mariage.'
    }
  },
  { 
    path: '/BookingAround', 
    name: 'BookingAround', 
    component: BookingAround, 
    meta: { 
      title: 'Réservation & Alentours | Mariage',
      description: 'Informations pratiques sur les réservations et les attractions aux alentours.'
    }
  },
  { 
    path: '/AdressesWedding', 
    name: 'AdressesWedding', 
    component: AdressesWedding, 
    meta: { 
      title: 'Adresses | Mariage',
      description: 'Tous les détails et adresses pratiques pour notre mariage.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

const baseTitle = 'Notre Mariage - Une Belle Aventure'
const baseDescription = 'Découvrez notre histoire d\'amour et les détails de notre mariage. Consultez le programme, le dress code, les adresses et les informations pratiques.'

router.beforeEach((to, from, next) => {
  const title = to.meta?.title || baseTitle
  const description = to.meta?.description || baseDescription
  
  document.title = title
  
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    document.head.appendChild(metaDescription)
  }
  metaDescription.content = description
  
  updateMetaTag('og:title', title)
  updateMetaTag('og:description', description)
  
  next()
})

function updateMetaTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.content = content
}

export default router