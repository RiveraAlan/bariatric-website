import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MedicalTourism from '../views/MedicalTourism.vue'
import StatePage from '../views/StatePage.vue'
import { statesData } from '../data/states'

const stateRoutes = statesData.map(state => ({
  path: `/${state.slug}`,
  name: state.slug,
  component: StatePage,
}))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/medical-tourism',
      name: 'medical-tourism',
      component: MedicalTourism,
    },
    ...stateRoutes,
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
})

export default router
