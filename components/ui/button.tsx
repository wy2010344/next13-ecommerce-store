import { cn } from '@/lib/util';
import type { FC } from 'react';
import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }


const Button = forwardRef(({
  className,
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  return <button className={cn(
    "w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed",
    "disabled:opacity-50 text-white font-semibold hover:opacity-75 transition",
    className
  )} ref={ref} disabled={disabled} {...props}>
    {children}
  </button>
})

Button.displayName = "Button"
export default Button