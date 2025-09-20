<template>
    <v-fade-transition>
        <v-container class="text-center">
            <h2>⏳ Le grand jour approche !</h2>
            <v-row justify="center">
                <v-col cols="3">
                    <div class="count">{{ countdown.days }}</div>
                    <div class="label">Jours</div>
                </v-col>
                <v-col cols="3">
                    <div class="count">{{ countdown.hours }}</div>
                    <div class="label">Heures</div>
                </v-col>
                <v-col cols="3">
                    <div class="count">{{ countdown.minutes }}</div>
                    <div class="label">Minutes</div>
                </v-col>
                <v-col cols="3">
                    <div class="count">{{ countdown.seconds }}</div>
                    <div class="label">Secondes</div>
                </v-col>
            </v-row>
        </v-container>
    </v-fade-transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const expired = ref(false)

const targetDate = new Date('2027-04-24T15:00:00') // 🗓️ Change selon ton jour J
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })

function updateCountdown() {
    const now = new Date()
    const diff = targetDate - now

    if (diff <= 0) {
        expired.value = true
        countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        return
    }

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

onUnmounted(() => {
    clearInterval(interval)
})

</script>

<style scoped>
.count {
    font-size: 2.5rem;
    font-weight: bold;
    color: #d16ba5;
    /* rose pastel */
}

.label {
    font-size: 1rem;
    color: #888;
}

.v-container {
    background: linear-gradient(to bottom, #fceff9, #fff);
    padding: 2rem;
    border-radius: 12px;
}
</style>