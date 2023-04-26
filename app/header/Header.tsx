import HeaderClient from '../../components/HeaderCli/HeaderClient';
import { Product } from '../../typings';
import { fetchProducts } from '../../utils/fetchProducts';

async function Header() {
  const productsData: Product[] = await fetchProducts();
  return <HeaderClient productsData={productsData} />;
}

export default Header;
