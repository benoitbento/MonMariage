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
  max-width: 600px;
  margin: 0 auto;
}

.day-title {
  font-family: 'Great Vibes', cursive;
  color: #c5a059;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 40px;
}

.timeline {
  position: relative;
  margin: 40px auto; /* Centre le conteneur */
  width: 100%;
  max-width: 400px; /* Limite la largeur pour que ça reste élégant */
}

/* On crée la ligne verticale pile au milieu */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30%; /* La ligne sera à 30% de la largeur du bloc */
  width: 1.5px;
  background-color: #f0e6d2;
}

.event-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 35px;
  width: 100%;
}

/* Le point doré centré sur la ligne */
.event-item::after {
  content: '';
  position: absolute;
  left: calc(30% - 10px); /* 10px = moitié de la largeur du point */
  top: 4px;
  width: 20px;
  height: 20px;
  background: white;
  border: 2px solid #c5a059;
  border-radius: 50%;
  z-index: 2;
}

.time {
  /* On force l'heure à prendre l'espace à gauche de la ligne */
  width: 30%; 
  text-align: right;
  padding-right: 25px;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 600;
  color: #c5a059;
  font-size: 0.85rem;
  margin-top: 6px;
}

.event-details {
  /* Le texte prend tout le reste à droite */
  width: 70%;
  padding-left: 25px;
  box-sizing: border-box;
  text-align: left;
}

/* Ajustement pour le titre du jour pour qu'il s'aligne visuellement */
.day-title {
  /* On ajoute une petite marge pour compenser le décalage de la timeline */
  padding-right: 0; 
  text-align: center;
}
.event-details h4 {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  color: #333;
  font-size: 0.95rem;
}

.event-details p {
  font-family: 'Montserrat', sans-serif !important;
  margin: 4px 0 0;
  color: #666;
  font-size: 0.9rem;
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