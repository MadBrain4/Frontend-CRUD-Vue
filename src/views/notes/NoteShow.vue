<template>
    <div class="container">
        <div class="cabecera">
            <router-link :to="{'name': 'notes'}">
                <v-btn class="botonRegresar">Atras</v-btn>
                <h3>{{ note.title }}</h3>
            </router-link>
        </div>
        <v-table>
            <thead>
                <tr>
                    <td>Title</td>
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
    const errors = service.getErrors()
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
        margin-top: 0.75em;
        text-align: right;
    }

    .cabecera {
        display: flex;
        flex-direction: row;
    }
</style>