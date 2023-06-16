import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { OrderCard } from '../OrderCard';
import './style.css';

function CheckOutSideMenu() {
  const { cartProducts, isCheckoutSideMenuOpen, closeCheckoutSideMenu } =
    useContext(ShoppingCartContext);

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
      <div>
        {cartProducts?.map((cartProduct) => (
          <OrderCard
            key={cartProduct.id}
            title={cartProduct.title}
            imageUrl={cartProduct.images[0]}
            price={cartProduct.price}
          />
        ))}
      </div>
    </aside>
  );
}

export { CheckOutSideMenu };
