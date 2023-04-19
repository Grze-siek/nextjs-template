import { Product } from '../typings';

type Props = {
  productsData: Product[];
};

function useReturnProductsNames({ productsData }: Props) {
  let namesArray: string[] = [];
  productsData.map((product) => namesArray.push(product.name));
  return namesArray;
}

export default useReturnProductsNames;
