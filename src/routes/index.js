import { HeaderOnly } from '@/components/Layout'
import { Following, Home, Search, Upload, Profile, NotFound } from '@/pages'

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },

  {
    path: '/search',
    component: Search,
    layout: null,
  },
  {
    path: '/profile/:nickname',
    component: Profile,
  },
  {
    path: '*',
    component: NotFound,
  },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
