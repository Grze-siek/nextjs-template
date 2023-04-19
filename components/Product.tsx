'use client';
import Image from 'next/image';
import { Product } from '../typings';
import { motion } from 'framer-motion';
import { urlFor } from '../lib/sanity-client';

type Props = {
  product: Product;
};

function Product({ product }: Props) {
  return (
    <div className="flex-shrink-0 h-full snap-center flex flex-col space-y-5 items-center justify-center max-[500px]:w-screen min-[500px]:w-[300px] md:w-[400px] xl:w-[400px] bg-[#fffcf9] px-8 md:px-16 py-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="relative h-52 w-full md:h-72 lg:h-64"
      >
        <Image
          src={urlFor(product.image).url()}
          fill={true}
          alt={product.name}
          className="object-cover"
        />
      </motion.div>
      <h3 className="text-2xl text-left">{product.name}</h3>
      <p className="text-md text-left text-gray-400 max-w-1/2 line-clamp-4">
        {product.description}
      </p>
    </div>
  );
}

export default Product;
