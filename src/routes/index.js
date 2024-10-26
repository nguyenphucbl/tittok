import { Following, Home, Search, Upload, Profile, NotFound, Live } from '@/pages'
import config from '@/config'
import { HeaderOnly } from '@/layouts'
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },

  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.live,
    component: Live,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
  },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
