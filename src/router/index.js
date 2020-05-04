import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// TODO: Import the Survey component
import Survey from '@/views/Survey.vue'
// TODO: Import the Secret component
import Secret from '@/components/Secret.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
// TODO: Add the Survey route definition
{
  path: '/survey',
  name: 'Survey',
  component: Survey
},
// TODO: Add the Secret route definition
{
  path: '/secret',
  name: 'Secret',
  component: Secret
}
]

const router = new VueRouter({
  routes
})

export default router
