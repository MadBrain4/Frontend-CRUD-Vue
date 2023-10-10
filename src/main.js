import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
app.use(store).use(router).use(vuetify).use(pinia).mount('#app')
