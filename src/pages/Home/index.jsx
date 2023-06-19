import { useContext } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';
import { ProductDetail } from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';

function Home() {
  const { items, searchByTitle, setSearchByTitle, filteredItems } = useContext(ShoppingCartContext);

  const renderView = () => {
    if (searchByTitle?.length > 0) {
      if (filteredItems?.length > 0) {
        return (
          filteredItems?.map((item) => (
            <Card key={item.id} product={item} />
          ))
        )
      } else {
        return (
          <div>Product not found</div>
        )
      }
    } else {
      return (
        items?.map((item) => (
          <Card key={item.id} product={item} />
        ))
      )
    } 
  }

  return (
    <Layout>
      <div className="flex w-80 relative items-center justify-center mb-4">
        <h1 className="font-medium text-lg">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a products"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg mt-3">
        {renderView()}
        {/* {items?.map((item) => (
          <Card key={item.id} product={item} />
        ))} */}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
