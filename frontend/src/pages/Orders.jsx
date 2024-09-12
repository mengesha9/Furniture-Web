import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="My" text2="Orders" />
      </div>
      <div className="flex flex-col gap-4 mt-8">
        {products.slice(0, 5).map((product, index) => {
          return (
            <div
              key={index}
              className=" py-4 borer-t border-b text-gray-700  flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start text-sm gap-6">
                <img src={product.image[0]} alt="" className="w-16 sm:w-20" />
                <div>
                  <p className="sm:text-base font-medium">{product.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p>
                      {currency}
                      {product.price}
                    </p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="mt-2">
                    Date: <span className="text-gray-400"> 25,jul,2024</span>{" "}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">Ready to ship</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
              </div>

              {/* <button className="border border-gray-300 px-4 py-1 rounded">Reorder</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
