import { XMarkIcon } from '@heroicons/react/24/solid';

function ProductDetail() {
  return (
    <aside className="w-[360px] h-[calc(100vh-68px)] flex flex-col bg-white border border-black rounded-lg fixed right-0 top-[68px]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
    </aside>
  );
}

export { ProductDetail };
