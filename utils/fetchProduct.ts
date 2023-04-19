import { Product } from '../typings';

export const fetchProduct = async (name: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts?name=${name}`
  );
  if (!res.ok) throw new Error('Failed to fetch product');
  const data = await res.json();
  const product: Product = data.product;
  return product;
};
