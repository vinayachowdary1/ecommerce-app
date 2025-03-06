import { useSelector, useDispatch } from "react-redux";
import { CATEGORIES, STARRATING, PRICE } from "../utils/constant";
import { applyFilters } from "../utils/productSlice";
import { useState } from "react";

const ProductsFilters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    category: [],
    rating: [],
    price: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFilters((prevFilters) => {
      let updatedFilters = { ...prevFilters };

      if (type === "checkbox") {
        updatedFilters[name] = checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value);
      } else {
        updatedFilters[name] = value;
      }

      dispatch(applyFilters(updatedFilters));
      return updatedFilters;
    });
  };

  return (
    <div className="flex flex-col ml-5 gap-2">
      <h3 className="text-md text-gray-800 mb-1">Category</h3>
      <div className="flex flex-col gap-2">
        {CATEGORIES?.map((item) => (
          <label key={item} className="flex items-center gap-2">
            <input type="checkbox" name="category" value={item} onChange={handleChange} />
            <span className="text-md text-gray-800">{item}</span>
          </label>
        ))}
      </div>

      <h3 className="text-md text-gray-800 mb-1">Rating Filter</h3>
      <div className="flex flex-col gap-2">
        {STARRATING?.map((item) => (
          <label key={item.value} className="flex items-center gap-2">
            <input type="checkbox" name="rating" value={item.value} onChange={handleChange} />
            <span className="text-md text-gray-800">{item.label}</span>
          </label>
        ))}
      </div>

      <h3 className="text-md text-gray-800 mb-1">Price</h3>
      <div className="flex flex-col gap-2">
        {PRICE?.map((item) => (
          <label key={item} className="flex items-center gap-2">
            <input type="radio" name="price" value={item} onChange={handleChange} />
            <span className="text-md text-gray-800">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductsFilters;



