import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Add this line
import { products } from "../assets/forever-assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    // Add to cart logic
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
    toast.success("Item added to cart");
  };

  const getCartCount = () => {
    let count = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        count += cartItems[item][size];
      }
    }
    return count;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      let itemInfo = products.find((product) => product._id === item);
      for (const size in cartItems[item]) {
        try {
          if (cartItems[item][size] > 0) {
            total += itemInfo.price * cartItems[item][size];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return total;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    location,
    addToCart,
    cartItems,
    getCartCount,
    setCartItems,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ShopContextProvider;
