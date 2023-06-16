import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { Layout } from '../../components/Layout';
import { OrderCard } from '../../components/OrderCard';

function MyOrder() {
  const {order} = useContext(ShoppingCartContext)
  const lastOrder = order[order.length-1]

  return (
    <Layout>
      <p>My Order</p>
      <div className="px-6 flex-1">
        {
          lastOrder.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export { MyOrder };
