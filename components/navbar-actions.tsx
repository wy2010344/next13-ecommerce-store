"use client"
import type { FC } from 'react';
import Button from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { useIsMounted } from '@/hooks/use-is-mounted';
import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

interface NavbarActionsProps { }

const NavbarActions: FC<NavbarActionsProps> = () => {

  const isMounted = useIsMounted()

  const cart = useCart()

  const router = useRouter()

  if (!isMounted) {
    return null
  }
  return (<div className='ml-auto flex items-center gap-x-4'>
    <Button className='flex items-center rounded-full bg-black px-4 py-2' onClick={() => {
      router.push('/cart')
    }}>
      <ShoppingBag size={20} color='white' />
      <span className='ml-2 text-sm font-mono text-white'>{cart.items.length}</span>
    </Button>
  </div>);
}

export default NavbarActions;
