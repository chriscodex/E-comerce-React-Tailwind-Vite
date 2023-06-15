import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';

import { apiUrl } from '../../api';

function Home() {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/products`);
      const products = await response.json();
      setItems(products);
      console.log(products);
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
    </Layout>
  );
}

export { Home };
