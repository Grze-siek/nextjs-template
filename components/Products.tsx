'use client';
import Link from 'next/link';
import { HomePage } from '../typings';
import AnimatedText from './AnimatedText';
import ProductItem from './Product';

type Props = {
  productsData: HomePage;
};

function Products({ productsData }: Props) {
  return (
    <div
      id="product"
      className="md:h-screen flex relative overflow-hidden flex-col text-left max-w-full sm:px-10 md:justify-evenly mx-auto items-center bg-light-color"
    >
      <h1 className="text-darkred-color text-center uppercase md:pt-6 lg:pt-12 text-md lg:text-xl font-bold md:pb-4">
        Products
      </h1>
      <div className="text-3xl max-w-xl py-2 lg:text-5xl lg:max-w-3xl text-center mx-auto">
        <AnimatedText text={productsData.productDescription} />
      </div>
      <div className="flex w-full lg:max-w-5xl xl:max-w-6xl overflow-x-scroll z-20 overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkred-color scrollbar-thumb-rounded">
        {productsData.products?.map((product) => (
          <Link key={product._id} href={`/product/${product.name}`}>
            <ProductItem product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
