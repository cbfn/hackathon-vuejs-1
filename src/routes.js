import Users from './components/Users'
import User from './components/User'
import Home from './components/Home'

// 1. Define route components.
// These can be imported from other files
// const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
export const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  }
]
