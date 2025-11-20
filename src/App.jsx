import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ui/Home'
import Cart from './features/cart/Cart'
import Menu from './features/menu/Menu'
import Order from './features/order/Order'
import CreateNewOrder from './features/order/CreateNewOrder'
// MENU DATA
import { loader as menuData } from './features/menu/Menu'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
      path: '/',
      element: <Home />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/menu',
      element: <Menu />,
      loader: menuData,
      errorElement: <Error />
    },
    {
      path: '/order/new',
      element: <CreateNewOrder />
    },
    {
      path: '/order/:id',
      element: <Order />
    }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
