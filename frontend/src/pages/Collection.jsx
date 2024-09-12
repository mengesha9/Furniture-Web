import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/forever-assets/assets/frontend_assets/assets";

const Collection = () => {
  const { products ,search,showSearch} = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sort, setSort] = useState("relevant");

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value)); // Remove from the array
    } else {
      setCategory([...category, value]); // Add to the array
    }
  };

  const handleSubCategoryChange = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory(subCategory.filter((item) => item !== value)); // Remove from the array
    } else {
      setSubCategory([...subCategory, value]); // Add to the array
    }
  };

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    // Filter by category and subcategory
    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((item) => subCategory.includes(item.subCategory));
    }

    // Search the products

    if (search && showSearch) {
      updatedProducts = updatedProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort the products
    if (sort === "low-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "high-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(updatedProducts);


  }, [category, subCategory,sort,search,showSearch]);

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex gap-10 my-10">
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t">
        {/* filter options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            Filters
            <img
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>

          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            }  sm:block`}
          >
            <p className="mb-3 text-sm font-medium ">Categories</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={handleCategoryChange}
                  className="w-3"
                  type="checkbox"
                  value={"Men"}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  onChange={handleCategoryChange}
                  className="w-3"
                  type="checkbox"
                  value={"Women"}
                />{" "}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  onChange={handleCategoryChange}
                  className="w-3"
                  type="checkbox"
                  value={"Kids"}
                />{" "}
                Kids
              </p>
            </div>
          </div>

          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            }  sm:block`}
          >
            <p className="mb-3 text-sm font-medium ">Type</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={handleSubCategoryChange}
                  className="w-3"
                  type="checkbox"
                  value={"Topwear"}
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  onChange={handleSubCategoryChange}
                  className="w-3"
                  type="checkbox"
                  value={"Bottomwear"}
                />{" "}
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  onChange={handleSubCategoryChange}
                  className="w-3"
                  type="checkbox"
                  value={"Winterwear"}
                />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className=" flex justify-between items-center py-5  text-3x1">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* product sort  */}
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>

          {/* <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600"> hello</p> */}
        </div>

        {/* Rendering products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
