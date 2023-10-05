<template>
    <div>
        <v-parallax
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <div class="d-flex flex-column fill-height align-center text-black">
                <form class="bg-white d-flex flex-column align-center form">
                    <h3 class="text-h4 text">Registrarse</h3>

                    <div class="inputs">
                        <input placeholder="Name" type="text" class="input">

                        <input placeholder="Email" type="email" class="input">
    
                        <input placeholder="Password" type="password" class="input">

                        <input placeholder="Confirm Password" type="password" class="input">

                        <button class="btn-enviar">Login</button>
                    </div>
                </form>
            </div>
        </v-parallax>
    </div>
</template>

<script setup>
    import { ref } from 'vue'


</script>

<style scoped>
    .form {
        width: 45%;
        height: 75%; 
        margin-top: 1em;
        border-radius: 7px;
    }

    .text {
        align-self: flex-start;
        text-align: center;
        width: 100%;
        margin-top: 1em;
    }

    .inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .input {
        border: 2px solid #000;
        border-radius: 10px;
        padding: 1em;
        margin: 0.5em;
        width: 75%;
        font-weight: 600;
        align-self: center;
    }

    .btn-enviar {
        background-color: #AFE9A0;
        width: 6em;
        font-weight: bold;
        border-radius: 6px;
        height: 3em;
        align-self: center;
    }

    .btn-enviar:hover {
        background-color: #5DB447;
    }

    @media screen and (max-width: 1100px) and (min-width: 900px) {
        .form {
            height: 90%;
        }
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
        .form {
            margin-top: 0.75em;
            width: 60%;
            height: 100%;
        }
    }

    @media screen and (max-width: 500px) {
        .form {
            margin-top: 0.5em;
            width: 100%;
            height: 100%;
        } 
    }
</style>