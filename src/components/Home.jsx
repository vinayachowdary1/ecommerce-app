import ProductsFilters from "./ProductsFilters";
import DisplayProducts from "./DisplayProducts";
import { PRODUCTS_URL } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { setProducts } from "../utils/productSlice";
import useFetch from "../utils/useFetch";

const Home = () => {
  const dispatch = useDispatch();

  const { data: productsData, error, loading } = useFetch(PRODUCTS_URL);
  useEffect(() => {
    if (productsData?.products?.length > 0) {
      dispatch(setProducts(productsData.products));
    }
  }, [productsData]);

  return (
    <div className="mt-28">
      <h1 className="text-3xl font-bold text-center">Welcome to ShopCart</h1>

      {loading && <p className="text-center text-lg">Loading products...</p>}
      {error && <p className="text-center text-lg text-red-500">Error: {error.message}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-12">
          <aside className="col-span-3 p-4">
            <h3 className="text-md text-gray-800 ml-5 mb-4">Sort by:</h3>
            <ProductsFilters />
          </aside>

          <main className="col-span-9 p-4">
            <DisplayProducts />
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;







