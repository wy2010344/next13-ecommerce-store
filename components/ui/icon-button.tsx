import { cn } from '@/lib/util';
import type { FC } from 'react';

interface IconButtonProps {
  className?: string
  onClick(e: React.MouseEvent): void
  icon: React.ReactNode
}

const IconButton: FC<IconButtonProps> = ({
  className,
  icon,
  onClick
}) => {
  return (<button onClick={onClick} className={cn(
    "rounded-full flex items-center justify-center bg-white border",
    "shadow-md p-2 hover:scale-100 transition",
    className
  )}>
    {icon}
  </button>);
}

export default IconButton;
