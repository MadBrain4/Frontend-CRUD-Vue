<template>
    <div class="container">
        <div class="cabecera">
            <router-link :to="{'name': 'notes'}">
                <v-btn class="botonRegresar" >Atras</v-btn>
            </router-link>
            <h2 class="title" >{{ note.title }}</h2>
        </div>
        <v-table>
            <thead>
                <tr>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ note.description }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script setup>
    import NoteService from '@/services/NoteServices';
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router'

    let noteId = ref('')
    const service = new NoteService()
    const note = service.getNote()

    onMounted(async () => {
        const route = useRoute()
        noteId.value = route.params.note

        await service.loadNote(noteId.value) 
    })
</script>

<style scoped>
    .botonRegresar {
        background-color: #F04F4F;
        align-self: center;
        position: relative;
    }

    .cabecera {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0.5em
    }

    .title {
        margin: 0 auto;
        align-self: center;
    }
</style>