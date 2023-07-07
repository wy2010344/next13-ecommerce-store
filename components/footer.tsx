import type { FC } from 'react';

interface FooterProps { }

const Footer: FC<FooterProps> = () => {
  return (<footer className='bg-white border-t'>
    <div className="mx-auto py-10">
      <div className="text-center text-xs text-black">
        &copy; 2023 FakeStoreNameA, Inc. All rights reversed
      </div>
    </div>
  </footer>);
}

export default Footer;
