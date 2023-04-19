'use client';
import { urlFor } from '../lib/sanity-client';
import { Product } from '../typings';

type Props = {
  product: Product;
};

function ProductButton({ product }: Props) {
  return (
    <button
      data-item-id={product?._id}
      data-item-price={product?.price}
      data-item-description={product?.description}
      data-item-image={urlFor(product?.image).url()}
      data-item-name={product?.name}
      type="button"
      className="snipcart-add-item uppercase px-6 py-2 bg-darkred-color text-light-color rounded-md text-lg transition ease-in-out hover:opacity-60"
    >
      Add to cart
    </button>
  );
}

export default ProductButton;
