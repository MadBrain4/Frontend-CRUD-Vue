<template>
    <div class="container">
        <div class="cabecera">
            <router-link :to="{'name': 'notes'}">
                <v-btn class="botonRegresar" >Atras</v-btn>
            </router-link>
            <h3 class="title">Editar Nota</h3>
        </div>
        <form @submit.prevent="editNote" class="form" >
            <div class="container-input">
                <label>Titulo: </label>
                <input v-model="title" type="text" class="input" />
            </div>
            <div class="container-input">
                <label class="description" >Descripcion: </label>
                <textarea v-model="description" cols="25" rows="10" class="input" >
                </textarea>
            </div>
            <button class="btn" type="submit" >Editar</button>
        </form>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import NoteService from '@/services/NoteServices';

    const route = useRoute()
    const router = useRouter()

    let title = ref('')
    let description = ref('')
    let noteId = ref('')

    const service = new NoteService()
    const note = service.getNote()

    const editNote = async () => {
        await service.editNote(noteId.value, title.value, description.value)
        router.push({ name: 'notes' })
    }

    onMounted(async () => {
        noteId.value = route.params.note

        await service.loadNote(noteId.value)

        title.value = note.value.title
        description.value = note.value.description
    })
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }

    .cabecera {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0.5em
    }
    
    .title {
        text-align: center;
        margin: 0.2em auto;
    }

    .botonRegresar {
        background-color: #F04F4F;
        align-self: center;
        position: relative;
    }
    
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 0.5em;
    }

    label {
        width: 7em;
    }
    
    .container-input {
        margin: 0 auto;
        justify-self: center;
        display: flex;
        flex-direction: row;
        margin-bottom: 1em;
    }

    .input {
        border: 1px solid #000;
        border-radius: 5px;
    }

    .description {
        
    }

    .btn {
        background-color: #45BE4B;
        padding: 0.5em 1em;
        border-radius: 5px;
        color: white;
        width: 5em;
        text-align: center;
        margin: 0 auto;
    }
</style>