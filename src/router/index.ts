import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import YearPage from '@/pages/YearPage.vue'
import UniversitiesPage from '@/pages/UniversitiesPage.vue'
import AllCoursesPage from '@/pages/AllCoursesPage.vue'
import SignUp from '@/pages/SignUp.vue'
import SignIn from '@/pages/SignIn.vue'
import Profile from '@/pages/Profile.vue'
import ForgotPassword from '@/pages/ForgotPassword.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/year',
    name: 'YearPage',
    component: YearPage
  },
  {
    path: '/universities',
    name: 'UniversitiesPage',
    component: UniversitiesPage
  },
  {
    path: '/courses',
    name: 'AllCoursesPage',
    component: AllCoursesPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 