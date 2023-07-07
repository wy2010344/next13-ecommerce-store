import { cn } from '@/lib/util';
import { Image as ImageType } from '@/type';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import type { FC } from 'react';

interface GalleryTabProps {
  image: ImageType
}

const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
  return (<Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
    {({ selected }) => {

      return <div>
        <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
          <Image fill src={image.url} alt="" className="object-cover object-center" />
        </span>
        <span className={cn(
          "absolute inset-0 rounded-md ring-2 ring-offset-2",
          selected ? "ring-black" : "ring-transparent"
        )}></span>
      </div>
    }}
  </Tab>);
}

export default GalleryTab;
