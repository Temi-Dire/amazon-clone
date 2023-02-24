import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, info, price, image, ratings }) {
  //eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  function addToBasket() {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        info: info,
        image: image,
        price: price,
        ratings: ratings,
      },
    });
  }

  return (
    <div
      className={
        "flex bg-white flex-col items-center justify-end m-[10px] p-[20px] w-full max-h-[400px] min-w-[100px]"
      }
    >
      <div className="h-[100px] mb-[15px] ">
        <p>{info}</p>
        <p>{"$" + price}</p>
      </div>
      <div className="flex">
        {Array(ratings)
          .fill()
          .map((numberOfRating, index) => (
            <p>🌟</p>
          ))}
      </div>
      <img
        className="max-w-[200px] w-full object-contain mb-[15px]"
        src={image}
        alt="Product"
      />
      <button
        className="bg-[#f0c14b] border-solid border-2 mt-[10px] border-[#846829]"
        onClick={addToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
