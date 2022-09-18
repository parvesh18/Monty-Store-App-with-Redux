import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Action";

const Home = () => {
  // useState Hook
  const [products, setProducts] = useState([]);

  // useDispatch Hook of React-Router-Dom
  const dispatch = useDispatch();

  //   API url Link
  const APIURL = "https://fakestoreapi.com/products";

  //   async function to get prdoucts from API
  const getData = async () => {
    let data = await fetch(APIURL);
    data = await data.json();
    setProducts(data);
  };

  // Function of 'Add To cart' button
  const sendData = (item) => {
    dispatch(addToCart(item));
  };

  //   useEffect Hook
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-evenly bg-slate-900 pt-2 pb-10 font-poppin">
        {/* map function :- to iterate all products of API */}
        {products.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-row justify-center items-center mx-10 px-5 md:p-4 md:mx-2 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 h-[50vh] md:h-80 my-8 pt-4 pb-2 bg-white rounded-lg"
            >
              {/* one product */}
              <div className="flex flex-col justify-center items-center my-auto ">
                {/* img */}
                <div>
                  <img
                    className="w-24 h-24  transition ease-in-out delay-150 duration-150 hover:-translate-y-1 hover:scale-125"
                    src={item.image}
                    alt=""
                  />
                </div>
                {/* content */}
                <div className="text-center mt-4">
                  {/* title */}
                  <h3 className="text-lg font-semibold">
                    {item.title.slice(0, 66)}
                  </h3>
                  {/* price */}
                  <h4 className="mt-2 font-semibold text-red-700">
                    $ {item.price}
                  </h4>
                </div>
                {/* button */}
                <div>
                  <button onClick={sendData.bind(this,item)} className="bg-orange-600 text-white px-2 py-1 font-semibold rounded-md mt-4 shadow-lg shadow-orange-500/50 transition ease-in-out delay-150 duration-150 hover:-translate-y-1 hover:scale-110">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
