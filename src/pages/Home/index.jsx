import { useContext } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';
import { ProductDetail } from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';

function Home() {
  const { items } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h1>Home</h1>
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg mt-3">
        {items?.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div> 
      <ProductDetail />
    </Layout>
  );
}

export { Home };
