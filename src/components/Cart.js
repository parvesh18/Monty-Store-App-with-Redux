import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../redux/Action";
import CartChild from "./CartChild";
import ShowMess from "./ShowMess";

const Cart = () => {
  // Hook to get data from store
  const products = useSelector((state) => state.cart);

  // Hook to send data to store
  const dispatch = useDispatch();

  // function to empty cart
  const emptyData = () => {
    dispatch(emptyCart());
  };

  // function to order successfully
  const order = () => {
    alert("Ordered Successfully😊");
    dispatch(emptyCart());
  };

  return (
    <div className="">
      {/* Order & Empty cart Buttons */}
      <div className="flex flex-row justify-between mx-5 sm:mx-7 md:mx-10 mt-3">
        <button
          onClick={order}
          className="bg-yellow-400 text-black px-2 py-1 font-semibold rounded-md mt-2 shadow-lg shadow-red-500/50 transition ease-in-out delay-150 duration-150 hover:scale-110"
        >
          Order Now
        </button>
        <button
          onClick={emptyData}
          className="bg-red-600 text-white px-2 py-1 font-semibold rounded-md mt-2 shadow-lg shadow-red-500/50 transition ease-in-out delay-150 duration-150 hover:scale-110"
        >
          Empty Cart
        </button>
      </div>
      {products.length == 0 ? <ShowMess /> : <CartChild />}
    </div>
  );
};

export default Cart;
