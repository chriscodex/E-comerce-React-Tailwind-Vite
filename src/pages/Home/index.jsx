import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';

function Home() {
  const [items, setItems] = useState(null)

  const request = () => {

  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch()
      } catch (error) {
        console.error(`Ocurrió un error: ${error}`)
      }
    }
  }, [])
  
  return (
    <Layout>
      <h1>Home</h1>
      <Card />
    </Layout>
  );
}

export { Home };
