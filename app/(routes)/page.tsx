import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';
import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';
import type { FC } from 'react';

interface HomeProps { }

const Home = async () => {
  const billboard = await getBillboards("7f9a352f-df1b-4402-8ff7-a6839ad7ab88")
  const products = await getProducts({
    isFeatured: true
  })
  return (<Container>
    <div className='space-y-10 pb-10'>
      <Billboard data={billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title='Products Featured' items={products} />
      </div>
    </div>
  </Container>);
}

export default Home;
