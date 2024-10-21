import { HeaderOnly } from '@/components/Layout'
import { Following, Home, Search, Upload } from '@/pages'

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
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
