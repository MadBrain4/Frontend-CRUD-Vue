<template>
    <h2 class="title">Note</h2>
    <router-link :to="{name: 'noteCreate'}">Crear Nota</router-link>
    <v-table>
        <thead>
            <tr>
                <td>Index</td>
                <td>Titulo</td>
                <td>Descripción</td>
                <td>Usuario</td>
                <td>Acciones</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(note, index) in notes" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ note.title }}</td>
                <td>{{ note.description }}</td>
                <td>{{ note.user.name }}</td>
                <td>
                    <router-link :to="{name: 'noteShow', params: {note: note.id}}" class="accion">Ver</router-link>
                    <router-link :to="{name: 'noteEdit', params: {note: note.id}}" class="accion">Editar</router-link>
                </td>
            </tr>
            <p v-if="errors != ''">{{ errors.connection }}</p>
        </tbody>
    </v-table>    
</template>

<script setup>
    import { onMounted } from 'vue'
    import NoteService from '@/services/NoteServices.js'

    const service = new NoteService()
    const notes = service.getNotes()
    const errors = service.getErrors()

    onMounted(async () => {
        await service.loadNotes()
    })
</script>

<style>
    .title {
        text-align: center;
    }

    .accion {
        margin: 0 0.25em;
    }
</style>