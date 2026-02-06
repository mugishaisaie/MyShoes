import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import SizeGuide from './pages/SizeGuide'
import NotFound from './pages/NotFound'

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/product/:slug', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/size-guide', component: SizeGuide },
  { path: '/not-found', component: NotFound }
]

export default routes
