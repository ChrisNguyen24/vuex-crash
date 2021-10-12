//Define route to componet
import Home from './assets/components/Home'
import User from './assets/components/user/User'
import UserDetail from "./assets/components/user/UserDetail";

export const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/user/', name: 'user', component: User},
  {path: '/user/:id', name: 'userdetail', component: UserDetail},
]
