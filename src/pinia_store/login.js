import { defineStore } from 'pinia'
import axios from 'axios'

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
        jwt: '',
        errors: '',
        id: '',
        name: '',
        email: ''
    }
  },
  getters: {

  },
  actions: {
    async login(email, password) {
      try {
        const url = 'http://127.0.0.1:8000/api/login'
        const params = {
          email,
          password
        }
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        const res = await axios.post(url, params, config)
        const response = res.data
    
        if(response.errors !== undefined) {
          this.errors = response.errors
          return false
        }
    
        this.jwt = response.access_token
        this.id = response.data.id
        this.name = response.data.name
        this.email = response.data.email
        this.user = response.user
        return true
      } catch (error) {
        this.errors = {
          'connection': ['Fallo en la Conexión']
        }
      }
    },
    async register (name, email, password, confirm_password) {
      const url = 'http://127.0.0.1:8000/api/register'
      const params = {
        name,
        email,
        password,
        confirm_password
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      try {
      const res = await axios.post(url, params, config)
        const response = res.data
  
        if(response.errors !== undefined) {
          this.errors = response.errors
          return false
        }
        
        this.jwt = response.access_token
        this.name = response.data.name
        this.email = response.data.email
        this.user = response.user
        return true

      } catch (error) {
        this.errors = {
          'connection': ['Fallo en la Conexión']
        }
      }
    },
    async logout () {
    }
  },
  persist: true
})