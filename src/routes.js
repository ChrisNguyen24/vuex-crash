//Define route to componet
import Home from './assets/components/Home'
import User from './assets/components/user/User'
import UserDetail from "./assets/components/user/UserDetail";
import UserStart from "./assets/components/user/UserStart";
import UserEdit from "./assets/components/user/UserEdit";

export const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/user/', name: 'user', component: User, children: [
      { path: '', name: 'user', component : UserStart},
      { path: ':id', name: 'userDetail' ,component: UserDetail},
      { path: ':id/edit', name: 'userEdit', component: UserEdit}
    ]},
]
