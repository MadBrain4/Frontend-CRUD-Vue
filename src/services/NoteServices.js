import { ref } from 'vue'
import axios from 'axios'
import { useLoginStore } from '@/pinia_store/login'

class NoteService {
    constructor () {
        this.notes = ref([])
        this.note = ref({})
        this.errors = ref([])
    }

    getErrors () {
        return this.errors
    }

    getNotes () {
        return this.notes
    }

    getNote () {
        return this.note
    }

    async loadNotes () {
        try {
        const loginStore = useLoginStore()
        const authorization = `Bearer ${loginStore.jwt}`
        console.log(authorization)
        const url = `http://127.0.0.1:8000/api/users/${loginStore.id}/notes`
        const config = {
            headers: {
                "Accept": 'aplication/json',
                "Content-Type": 'application/json',
                "Authorization": authorization
            }
        }
            const res = await axios.get(url, config)
            const response = res.data
            this.notes.value = response.data
            return true
        } catch (error) {
            this.errors.value = {
                'connection': ['Fallo en la Conexión']
            }
            return false
        }
    }

    async loadNote (id) {
        const loginStore = useLoginStore()
        const authorization = `Bearer ${loginStore.jwt}`
        const url = `http://127.0.0.1:8000/api/notes/${id}`
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authorization
            }
        }
        try {
            const res = axios.get(url, config)
            const response = (await res).data
            this.note.value = response.data
            return true
        } catch (error) {
            this.errors.value = {
                'connection': ['Fallo en la Conexión']
            }
            return false
        }
    }

    async editNote(id, title, description) {
        const loginStore = useLoginStore()
        const authorization = `Bearer ${loginStore.jwt}`
        const url = `http://127.0.0.1:8000/api/notes/${id}`
        const params = {
            title,
            description
        }
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authorization
            }
        }
        try {
            const res = axios.put(url, params, config)
            const response = (await res).data
            this.note.value = response.data
            return true
        } catch (error) {
            this.errors.value = {
                'connection': ['Fallo en la Conexión']
            }
            return false
        }
    }
}

export default NoteService
