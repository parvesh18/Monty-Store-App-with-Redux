import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart, emptyCart } from "../redux/Action";

const Cart = () => {
  // Hook to get data from store
  const products = useSelector((state) => state.cart);

  // Hook to send data to store
  const dispatch = useDispatch();

  // function to remove product from cart
  const removeData = (item) => {
    dispatch(removeToCart(item));
  };

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
      {/* selected products in cart by user */}
      <div className="flex flex-col sm:flex sm:flex-row sm:flex-wrap justify-evenly items-center mt-10 px-10 sm:px-2">
        {products.map((item) => {
          return (
            <div
              key={Math.random()}
              className="flex flex-col justify-center items-center m-2 p-2 text-center font-poppin sm:w-72 xl:w-96 h-52 sm:h-60"
            >
              {/* image */}
              <div>
                <img className="h-16" src={item.image} alt="" />
              </div>
              {/* title */}
              <div className="font-semibold mt-4 leading-tight">
                {item.title}
              </div>
              {/* price */}
              <div className="font-semibold text-red-600">$ {item.price}</div>
              {/* button */}
              <div>
                <button
                  onClick={removeData.bind(this, item.id)}
                  className="bg-green-600 text-white text-xs px-2 py-1 font-semibold rounded-md mt-2 shadow-lg shadow-green-500/50 transition ease-in-out delay-150 duration-150 hover:-translate-y-1 hover:scale-105"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
