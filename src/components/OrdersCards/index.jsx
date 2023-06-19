import { ChevronRightIcon } from '@heroicons/react/24/solid';

function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg w-80 p-4">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-light">01.02.2023</span>
          <span className="font-light">{totalProducts} articles</span>
        </div>
        <div className='flex gap-1 items-center'>
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export { OrdersCard };
