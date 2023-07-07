"use client"
import { Product } from '@/type';
import Image from 'next/image';
import type { FC } from 'react';
import IconButton from './icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';
import PreviewModal from '../preview-modal';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';

interface ProductCardProps {
  data: Product
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {

  const router = useRouter()
  const previewModal = usePreviewModal()
  const cart = useCart()

  return (<div onClick={() => {
    router.push(`/product/${data.id}`)
  }} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
    <div className="aspect-square rounded-xl bg-gray-100 relative">
      <Image alt='Image' src={data.images[0].url} fill
        className='aspect-square object-cover rounded-md'
      />
      <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
        <div className="flex gap-x-6 justify-center">
          <IconButton
            onClick={e => {
              e.stopPropagation()
              previewModal.onOpen(data)
            }}
            icon={<Expand size={20} className='text-gray-600' />} />
          <IconButton
            onClick={e => {
              e.stopPropagation()
              cart.addItem(data)
            }}
            icon={<ShoppingCart size={20} className='text-gray-600' />} />
        </div>
      </div>
    </div>
    <div>
      <p className="font-semibold text-lg">{data.name}</p>
      <p className="text-sm text-gray-500">{data.category.name}</p>
    </div>
    <div className="flex items-center justify-between">
      <Currency value={data.price} />
    </div>
  </div>);
}

export default ProductCard;
