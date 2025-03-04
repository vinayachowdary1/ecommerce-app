import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: categoryData, error, loading } = useFetch("https://dummyjson.com/products");
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    if (categoryData?.products?.length > 0) {
      // Use reduce to create an object with unique categories
      const categoryFilter = categoryData.products.reduce((acc, curr) => {
        if (!acc[curr.category]) {
          acc[curr.category] = { slug: curr.category, image: curr.thumbnail };
        }
        return acc;
      }, {});

      // Convert the object into an array using Object.values()
      const filteredData = Object.values(categoryFilter);
      setFilteredCategory(filteredData);
    }
  }, [categoryData]);

  if (loading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>...error</div>;
  }

  return (
    <div className="flex flex-wrap flex-row gap-[2%] mt-[10rem] justify-evenly px-[2%]">
      {filteredCategory.length > 0 &&
        filteredCategory.map((item) => (
          <Link key={item.slug} to={`/categoriesdetails/${item?.slug}`} className="w-[23%] border border-gray-300 rounded-lg h-[300px]">
           <img src={item.image} alt={item.slug} className="w-[100%] h-[100%] object-cover rounded-lg" />
              <h1 className="text-center mt-2 hover:underline mb-[1rem]">
                {item.slug.charAt(0).toUpperCase() + item.slug.slice(1)}
              </h1>
          </Link>
        ))}
    </div>
  );
};

export default Categories;

