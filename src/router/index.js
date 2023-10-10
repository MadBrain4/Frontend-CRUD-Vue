import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './../views/HomeView.vue'
import RegisterView from './../views/RegisterView.vue'
import LoginView from './../views/LoginView.vue'
import DashboardView from './../views/DashboardView.vue'
import NoteView from './../views/NoteView.vue'
import NoteShow from './../views/notes/NoteShow.vue'
import NoteEdit from './../views/notes/NoteEdit.vue'
import NoteCreate from './../views/notes/NoteCreate.vue'

// Pinia
import { useLoginStore } from '@/pinia_store/login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: false,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      requireAuth: false,
      pageLogin: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false,
      pageLogin: true,
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/notes/create',
    name: 'noteCreate',
    component: NoteCreate,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/notes',
    name: 'notes',
    component: NoteView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/notes/:note',
    name: 'noteShow',
    component: NoteShow,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/notes/edit/:note',
    name: 'noteEdit',
    component: NoteEdit,
    meta: {
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore()
  const auth = loginStore.jwt !== '' ? loginStore.jwt : null
  const needAuth = to.meta.requireAuth
  const pageLogin = to.meta.pageLogin || false

  if (needAuth && !auth) {
    next('login')
  } else if ((!needAuth && pageLogin) && auth) {
    next('dashboard')
  } else {
    next()
  } 
})

export default router
