import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/global.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Mariage d'Elyne et Benoit", 
  "description": "Rejoignez-nous pour célébrer notre union le 24 avril 2027.",
  "startDate": "2027-04-24T14:00:00+02:00",
  "endDate": "2027-04-24T15:00:00+02:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Abbaye de Fontdouce",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Preguillac",
      "addressRegion": "Charentes-Maritimes",
      "addressCountry": "FR"
    }
  },
  "image": [
    "https://www.elyneetbenoit.fr/WebSiteIcon.png" , 
    "https://www.elyneetbenoit.fr/photo-couple.jpg", 
    "https://www.elyneetbenoit.fr/photo-couple-two.jpg" 
  ],
  "offers": {
    "@type": "Offer",
    "price": "675.00",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStoreOnly",
    "description": "Événement sur invitation uniquement"
  }
}

const script = document.createElement('script')
script.type = 'application/ld+json'
script.textContent = JSON.stringify(structuredData)
document.head.appendChild(script)

app.use(router).use(vuetify).mount('#app')
