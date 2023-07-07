import type { FC } from 'react';
import Container from './ui/container';
import Link from 'next/link';
import MainNav from './ui/main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from './navbar-actions';

interface NavbarProps { }

const Navbar = async () => {
  const categories = await getCategories()
  return (<div className='border-b'>
    <Container>
      <div className="relative px-4 sm:px-6 lg:px-8 h-16 items-center flex">

        <Link href="/" className='ml-4 flex lg:ml-0 gap-x-2'>
          <p className='font-bold text-xl'>
            Store
          </p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </Container>
  </div>);
}

export default Navbar;
