import { Home } from "../components/screens/home/Home";
import { Product } from './../components/screens/product/Product';

export const routes = [
  {
    path: '/',
    component: Home,
    isAuth: true
  },
  {
    path: '/product/:name',
    component: Product,
    isAuth: true
  },
]