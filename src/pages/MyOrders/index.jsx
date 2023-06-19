import { useContext } from 'react';
import { Layout } from '../../components/Layout';
import { OrdersCard } from '../../components/OrdersCards';
import { ShoppingCartContext } from '../../context';
import { Link } from 'react-router-dom';

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 relative items-center justify-center mb-4">
        <h1 className='font-medium text-lg'>My Orders</h1>
      </div>
      {order.map((myOrder, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            date={myOrder.date}
            totalPrice={myOrder.totalPrice}
            totalProducts={myOrder.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export { MyOrders };
