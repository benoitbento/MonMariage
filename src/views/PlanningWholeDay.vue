  <template>
    <WeddingCard title="Planning">
      <div class="planning-container">

        <h3 class="day-title">Le Samedi</h3>
        <div class="timeline">
          <div v-for="event in saturdayEvents" :key="event.time" class="event-item">
            <span class="time">{{ event.time }}</span>
            <div class="event-details">
              <h4>{{ event.title }}</h4>
              <p>{{ event.location }}</p>
              <small v-if="event.note" class="event-note">({{ event.note }})</small>
            </div>
          </div>
        </div>
        <div class="day-section mt-8">
          <h3 class="day-title">Le Dimanche</h3>

          <div class="timeline">
            <div class="event-item">
              <span class="time">Matinée</span>
              <div class="event-details">
                <h4>Brunch</h4>
                <p>On se retrouve pour prolonger la fête !</p>
              </div>
            </div>
          </div>
        </div>

        <div class="info-alert">
          <v-icon color="#c5a059" class="mr-2">mdi-dog-side-off</v-icon>
          <span>Les chiens sont interdits à l'Abbaye de Fontdouce.</span>
        </div>
      </div>

    </WeddingCard>
  </template>

<script>
import WeddingCard from '@/components/WeddingCard.vue';


export default {
  name: 'PlanningWholeDay',
  components: {
    WeddingCard
  },
  data() {
    return {
      saturdayEvents: [
        { time: '14h00', title: 'Cérémonie civile', location: 'Mairie de Préguillac' },
        { time: '15h00', title: 'Cérémonie religieuse', location: 'Église de Préguillac' },
        { time: '16h30', title: 'Cortège', location: "Direction l'Abbaye de Fontdouce", note: '30 min de route' },
        { time: '17h00', title: 'Vin d’honneur & Repas', location: 'Abbaye de Fontdouce' }
      ]
    };
  },
}

</script>

<style scoped>
.planning-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 0;
}

.day-title {
  font-family: 'Great Vibes', cursive;
  color: #c5a059;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 30px;
}

.timeline {
  position: relative;
  border-left: 2px solid #f0e6d2;
  /* Ligne de la timeline */
  margin-left: 50px;
  padding-left: 30px;
}

.event-item {
  position: relative;
  margin-bottom: 30px;
}

/* Le point sur la ligne */
.event-item::before {
  content: '';
  position: absolute;
  left: -41px;
  top: 5px;
  width: 20px;
  height: 20px;
  background: white;
  border: 2px solid #c5a059;
  border-radius: 50%;
  z-index: 2;
}

.time {
  position: absolute;
  left: -110px;
  top: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #c5a059;
  font-size: 0.9rem;
}

.event-details h4 {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  color: #444;
}

.event-details p {
  margin: 5px 0 0;
  color: #777;
  font-style: italic;
}

/* Style spécifique pour la note d'avertissement (les chiens) */
.info-alert {
  margin-top: 40px;
  padding: 15px;
  border: 1px dashed #c5a059;
  border-radius: 8px;
  /* On la sort de la timeline pour qu'elle soit centrée sur toute la carte */
  clear: both; 
  text-align: center;
}

.mt-8 {
  margin-top: 50px;
}
</style>