import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context';
import './styles.css';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Navbar } from '../../components/Navbar';
import { CheckOutSideMenu } from '../../components/CheckoutSideMenu';

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/furniture',
      element: <Home />,
    },
    {
      path: '/electronics',
      element: <Home />,
    },
    {
      path: '/shoes',
      element: <Home />,
    },
    {
      path: '/others',
      element: <Home />,
    },
    {
      path: '/my-account',
      element: <MyAccount />,
    },
    {
      path: '/my-order',
      element: <MyOrder />,
    },
    {
      path: '/my-orders/last',
      element: <MyOrder />,
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />,
    },
    {
      path: '/my-orders',
      element: <MyOrders />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
