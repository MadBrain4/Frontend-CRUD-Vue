import { ref } from 'vue'
import axios from 'axios'

class LoginService {
  constructor () {
    this.user = ref({})
    this.jwt = ref('')
    this.errors = ref([])
  }

  getUser () {
    return this.user
  }

  getJWT () {
    return this.jwt
  }

  getErrors () {
    return this.errors
  }

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
      this.user = response.user
      return true
    } catch (error) {
      this.errors = {
        'connection': ['Fallo en la Conexión']
      }
    }

  }
}

export default LoginService