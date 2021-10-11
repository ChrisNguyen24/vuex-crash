//Define route to componet
import Home from './assets/components/Home'
import User from './assets/components/user/User'

export const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/user/:id', name: 'user', component: User},
]
