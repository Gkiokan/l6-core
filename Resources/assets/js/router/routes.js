
// const Login = () => import('~/pages/auth/login').then(m => m.default || m)
// const Register = () => import('~/pages/auth/register').then(m => m.default || m)
// const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
// const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Welcome = () => import('~/pages/Welcome').then(m => m.default || m)
const Home = () => import('~/pages/Home').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome.redirect', component: Welcome, redirect: { name: 'welcome' } },

  // { path: '/login', name: 'login', component: Login },
  // { path: '/login/withCB/{id}', name: 'login.withCB', component: Login },
  // { path: '/register', name: 'register', component: Register },
  // { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  // { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/home', name: 'home', component: Home },
  { path: '/welcome', name: 'welcome', component: Welcome },
  { path: '/login', name: 'login', component: () => import('~/pages/Login.vue').then(m => m.default || m) },

  { path: '/screen/1', name: 'screen.1', component: () => import('~/pages/dashboard/screen1.vue').then(m => m.default || m) },
  { path: '/screen/2', name: 'screen.2', component: () => import('~/pages/dashboard/screen2.vue').then(m => m.default || m) },
  { path: '/screen/3', name: 'screen.3', component: () => import('~/pages/dashboard/screen3.vue').then(m => m.default || m) },
  { path: '/screen/4', name: 'screen.4', component: () => import('~/pages/dashboard/screen4.vue').then(m => m.default || m) },
  { path: '/screen/5', name: 'screen.5', component: () => import('~/pages/dashboard/screen5.vue').then(m => m.default || m) },
  { path: '/screen/6', name: 'screen.6', component: () => import('~/pages/dashboard/screen6.vue').then(m => m.default || m) },

  { path: '*', component: NotFound }
]
