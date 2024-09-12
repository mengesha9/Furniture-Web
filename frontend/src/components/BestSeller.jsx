import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    // Filter the products where bestseller is true and then slice the first 10
    const filteredProducts = products.filter((product) => product.bestseller).slice(0, 5);
    setBestSellerProducts(filteredProducts);
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3x1">
        <Title text1="Best" text2="Seller" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </p>
      </div>
      {/* Rendering bestseller products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellerProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
