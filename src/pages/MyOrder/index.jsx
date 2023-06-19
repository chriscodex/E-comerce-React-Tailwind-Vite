import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';
import { Layout } from '../../components/Layout';
import { OrderCard } from '../../components/OrderCard';

function MyOrder() {
  const {order} = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = order?.length - 1

  return (
    <Layout>
      <div className="flex w-80 relative items-center justify-center mb-6">
        <Link to={'/my-orders'}>
          <ChevronLeftIcon className="h-5 w-5 text-black cursor-pointer absolute left-0 top-0" />
        </Link>
        <h1 className='font-medium text-lg'>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {
          order?.[index]?.products.map((product) => (
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
