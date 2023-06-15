import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail } = useContext(ShoppingCartContext)
  const productDetailStyle = 'w-[360px] h-[calc(100vh-68px)] flex flex-col bg-white border border-black rounded-lg fixed right-0 top-[68px]'
  
  return (
    <aside className={`${isProductDetailOpen ? productDetailStyle : 'hidden'} `}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div className='cursor-pointer' onClick={() => closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
    </aside>
  );
}

export { ProductDetail };
