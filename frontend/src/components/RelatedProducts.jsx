import { useContext, useState, useEffect, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory, id }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (products && products.length > 0) {
      let updatedProducts = [...products];
      updatedProducts = updatedProducts.filter(
        (item) => item.category === category && item._id !== id
      );
      updatedProducts = updatedProducts.filter(
        (item) => item.subCategory === subCategory
      );
      setRelatedProducts(updatedProducts);
    }
  }, [products, category, subCategory, id]);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="relative">
      <div className="text-center py-8 text-3xl">
        <Title text1="Related" text2="Products" />
      </div>
      {/* Arrow left */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 hover:bg-gray-500 text-white p-2 rounded-full z-10"
        onClick={() => scroll(-300)}
      >
        &#8592;
      </button>

      {/* Products container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth"
      >
        <div className="flex items-center px-5 gap-4 gap-y-6">
          {relatedProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            //   className="inline-block mr-4 " // Adds margin to the right of each product except the last one
            />
          ))}
        </div>
      </div>

      {/* Arrow right */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 hover:bg-gray-500 text-white p-2 rounded-full z-10"
        onClick={() => scroll(300)}
      >
        &#8594;
      </button>
    </div>
  );
};

RelatedProducts.propTypes = {
  category: PropTypes.string.isRequired,
  subCategory: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RelatedProducts;
