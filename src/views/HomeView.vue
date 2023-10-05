<template>
    <v-app>
        <main>
            <v-parallax
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                class="parallax"
            >
                <div class="d-flex flex-column fill-height align-center text-black titulo">
                    <h1 class="text-h1 font-weight-thin mb-4 text-white" :elevation="4" >
                        Qobuk
                    </h1>
                    <h4 class="text-h5 text-white text-medium">
                        Donde lo que Imaginas se Convierte en Realidad
                    </h4>
                </div>
            </v-parallax>
        </main>
    </v-app>
</template>

<script setup>
    
</script>

<style scoped>
    .titulo {
        margin-top: 17.5%;
    }
</style>