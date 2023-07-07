"use client"
import { useIsMounted } from '@/hooks/use-is-mounted';
import type { FC } from 'react';

interface CurrencyProps {
  value?: string | number
}

const Currency: FC<CurrencyProps> = ({
  value
}) => {
  const isMounted = useIsMounted()
  if (!isMounted) {
    return null
  }
  return (<div className='font-semibold'>
    {formatter.format(Number(value))}
  </div>);
}

export default Currency;



export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})