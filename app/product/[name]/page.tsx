import Image from 'next/image';
import { Product } from '../../../typings';
import { AiFillLock, AiFillStar } from 'react-icons/ai';
import { GiCheckMark } from 'react-icons/gi';
import { client, urlFor } from '../../../lib/sanity-client';
import { fetchProduct } from '../../../utils/fetchProduct';
import ProductButton from '../../../components/ProductButton';
import type { Metadata } from 'next';

type Params = {
  params: {
    name: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { name } = params;
  const productData: Promise<Product> = fetchProduct(name);
  const product: Product = await productData;
  return {
    title: product.name,
    description: product.description,
  };
}

async function productPage({ params }: Params) {
  const { name } = params;
  const productData: Promise<Product> = fetchProduct(name);
  const product = await productData;

  return (
    <main className="bg-light-color">
      <section className="md:pt-[77px] mx-auto lg:max-w-5xl xl:max-w-6xl border-b border-b-darker-color">
        <div className="flex-col space-y-8 md:space-y-0 md:space-x-6 md:flex md:flex-row md:justify-evenly xl:justify-between md:max-h-max mb-12">
          <div className="relative flex-1 mx-auto w-full h-96 md:h-auto md:w-auto">
            <Image
              src={urlFor(product?.image)?.url()}
              alt={product?.name}
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex-1 px-12 space-y-4 md:max-w-lg lg:max-w-3xl">
            <h1 className="text-center text-2xl font-bold mb-6">
              {product?.name}
            </h1>
            <p className="text-lg text-gray-500 text-center font-normal">
              {product?.description}
            </p>
            <p className="text-2xl font-bold">${product?.price}</p>
            {product?.isAvailable ? (
              <>
                <ProductButton product={product} />
                <div>
                  <div className="flex space-x-2 items-center">
                    <AiFillLock className="text-black h-5 w-5" />{' '}
                    <span className="uppercase text-md font-semibold">
                      secure transaction
                    </span>{' '}
                    <AiFillStar className="h-5 w-5 text-yellow-400" />
                    <AiFillStar className="h-5 w-5 text-yellow-400" />
                    <AiFillStar className="h-5 w-5 text-yellow-400" />
                    <AiFillStar className="h-5 w-5 text-yellow-400" />
                    <AiFillStar className="h-5 w-5 text-yellow-400" />
                  </div>
                  <p>
                    <GiCheckMark className="text-green-400 mr-2 inline-block" />
                    Worldwide delivery to your doorstep
                  </p>
                  <p>
                    <GiCheckMark className="text-green-400 mr-2 inline-block" />
                    Tracking number provided for all parcels
                  </p>
                  <p>
                    <GiCheckMark className="text-green-400 mr-2 inline-block" />
                    Full refund if the product is not received
                  </p>
                </div>
              </>
            ) : (
              <p className="uppercase text-center text-lg gont-semibold text-darkred-color">
                Currently out of stock
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default productPage;

export const generateStaticParams = async () => {
  const query = `*[_type == "product"] {
      ...,
    }`;
  const products: Product[] = await client.fetch(query);
  return products.map((product: Product) => ({
    name: product.name,
  }));
};
