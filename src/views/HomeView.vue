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
    form {
        box-sizing: border-box;
        padding: 2rem;
        border-radius: 1rem;
        background-color: hsl(0, 0%, 100%);
        border: 4px solid hsl(0, 0%, 90%);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .titulo {
        margin-top: 17.5%;
    }
</style>