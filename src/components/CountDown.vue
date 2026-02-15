<template>
    <v-fade-transition>
        <v-container class="countdown-champetre text-center">
            <div class="local-flowers">
                <h1 class="script-title title-wrapper">Le grand jour approche !
                    <img src="@/assets/flowers-divider.png" class="local-divider-icon" alt="Séparateur floral décoratif"
                        loading="lazy" />
                </h1>
            </div>

            <v-row justify="center" class="mt-10">
                <v-col cols="6" md="3" v-for="(value, unit) in countdownItems" :key="unit">
                    <div class="wreath-container">
                        <img src="@/assets/flower-wreath.png" class="wreath-img" alt="Couronne florale décorative"
                            loading="lazy" />
                        <div class="inner-circle" :aria-label="`Compte à rebours : ${unit} = ${value}`">
                            <div class="count">{{ value }}</div>
                            <div class="label">{{ unit }}</div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-fade-transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const targetDate = new Date('2027-04-24T15:00:00')
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })

const countdownItems = computed(() => ({
    'Jours': countdown.value.days,
    'Heures': countdown.value.hours,
    'Minutes': countdown.value.minutes,
    'Secondes': countdown.value.seconds
}))

function updateCountdown() {
    const diff = targetDate - new Date()
    if (diff <= 0) return

    countdown.value = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    }
}

let interval
onMounted(() => {
    updateCountdown()
    interval = setInterval(updateCountdown, 1000)
})
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.title-wrapper {
    position: relative;
    margin-bottom: 2rem;
}

.local-flowers {
    position: absolute;
    top: 50%;
    /* Centre l'image sur le texte */
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    /* Place les fleurs derrière le texte du titre */
    opacity: 0.6;
    /* Un peu de transparence pour le côté doux */
    width: 100%;
    max-width: 400px;
}

.local-divider-icon {
    width: 100%;
    height: auto;
}

.countdown-champetre {
    padding: 4rem 1rem;
}

.wreath-container {
    position: relative;
    width: 200px;
    /* À ajuster selon tes images */
    height: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.script-title {
    font-family: 'Great Vibes', cursive;
    color: #c5a059;
    /* Le doré de ta référence */
    font-size: 3.5rem;
    margin: 0;
}

.wreath-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
    /* Optionnel : petite animation de rotation très lente */
    animation: soft-rotate 60s linear infinite;
}

.inner-circle {
    position: relative;
    z-index: 2;
    width: 140px;
    height: 140px;
    border: 1px solid rgba(197, 160, 89, 0.3);
    /* Bordure dorée très fine */
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.4);
    /* Fond léger pour lisibilité */
}

.count {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 300;
    color: #c5a059;
    line-height: 1;
}

.label {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #888;
}

@keyframes soft-rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

/* Version Mobile */
@media (max-width: 600px) {
    .wreath-container {
        width: 150px;
        height: 150px;
    }

    .inner-circle {
        width: 110px;
        height: 110px;
    }

    .count {
        font-size: 1.8rem;
    }
}
</style>