import { HeaderOnly } from '@/components/Layout'
import { Following, Home, Search, Upload, Profile, NotFound } from '@/pages'
import routesConfig from '@/config/routes'
const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },

  {
    path: routesConfig.search,
    component: Search,
    layout: null,
  },
  {
    path: routesConfig.profile,
    component: Profile,
  },
  {
    path: routesConfig.notFound,
    component: NotFound,
  },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
