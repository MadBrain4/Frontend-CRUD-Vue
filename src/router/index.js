import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './../views/HomeView.vue'
import RegisterView from './../views/RegisterView.vue'
import LoginView from './../views/LoginView.vue'
import DashboardView from './../views/DashboardView.vue'

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
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false,
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requireAuth: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = false
  const needAuth = to.meta.requireAuth

  if (needAuth && !auth) {
    next('login')
  } else {
    next()
  } 
})

export default router
