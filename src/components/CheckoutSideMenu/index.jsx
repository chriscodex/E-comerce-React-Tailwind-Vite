import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { OrderCard } from '../OrderCard';
import { TotalPrice } from '../../utils/componentsHelpers';
import './style.css';

function CheckOutSideMenu() {
  const { cartProducts, setCartProducts, isCheckoutSideMenuOpen, closeCheckoutSideMenu } =
    useContext(ShoppingCartContext);

    const handleDelete = (id) => {
      const filteredProducts = cartProducts.filter((product) => product.id !== id)
      setCartProducts(filteredProducts)
    }

  const productDetailStyle =
    'scrollable-cards w-[360px] h-[calc(100vh-68px)] flex flex-col bg-white border border-black rounded-lg fixed right-0 top-[68px]';

  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? productDetailStyle : 'hidden'} `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div className="cursor-pointer" onClick={() => closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
      <div className='px-6'>
        {cartProducts?.map((cartProduct) => (
          <OrderCard
            key={cartProduct.id}
            id={cartProduct.id}
            title={cartProduct.title}
            imageUrl={cartProduct.images[0]}
            price={cartProduct.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>${TotalPrice(cartProducts)}</span>
        </p>
      </div>
    </aside>
  );
}

export { CheckOutSideMenu };
