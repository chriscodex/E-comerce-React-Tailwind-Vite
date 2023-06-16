import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';
import { ProductDetail } from '../../components/ProductDetail';

import { apiUrl } from '../../utils/api';

function Home() {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/products`);
      const products = await response.json();
      setItems(products);
    } catch (error) {
      console.error(`Ocurrió un error: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
