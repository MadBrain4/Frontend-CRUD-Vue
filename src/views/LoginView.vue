<template>
    <div>
        <v-parallax
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <div class="d-flex flex-column fill-height align-center text-black">
                <form @submit.prevent="loginUser" class="bg-white d-flex flex-column align-center form">
                    <h3 class="text-h4 text">Login</h3>

                    <div class="inputs">
                        <input v-model="email" placeholder="Email" type="text" class="input">
                        <input v-model="password" placeholder="Password" type="password" class="input">
                        <p v-if="store.errors !== ''" class="alerta">{{ store.errors }}</p>
                        <button type="submit" class="btn-enviar">Login</button>
                    </div>

                </form>
            </div>
        </v-parallax>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useLoginStore } from '@/pinia_store/login.js'

    const store = useLoginStore()

    let email = ref('')
    let password = ref('')

    const loginUser = async () => {
        const success = await store.login(email.value, password.value)

        if (success) {
            store.errors = ''
            console.log(store.jwt)
        }
        else {
            console.log(store.errors)
        }
    }
</script>

<style scoped>
    .form {
        width: 45%;
        height: 45%; 
        margin-top: 6em;
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
        font-weight: 800;
        align-self: center;
    }

    .btn-enviar {
        background-color: greenyellow;
        width: 6em;
        font-weight: bold;
        border-radius: 6px;
        height: 3em;
        align-self: center;
    }

    .btn-enviar:hover {
        background-color: green;
    }

    .alerta {
        color: #C74E27;
        text-align: center;
    }

    @media screen and (max-width: 1300px) and (min-width: 900px) {
        .form {
            height: 60%;
        }
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
        .form {
            margin-top: 0.75em;
            width: 60%;
            height: 75%;
        }
    }

    @media screen and (max-width: 700px) and (min-width: 500px) {
        .form {
            height: 90%;
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