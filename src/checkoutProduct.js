import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, info, price, image, ratings }) {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //to remove the item that was clicked in the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct flex my-[20px]">
      <img
        className="checkoutProduct__image object-contain w-[180px] h-[180px]"
        src={image}
        alt="Checkout Product"
      />
      <div className="checkoutProduct__info pl-[20px]">
        <p className="checkoutProduct__title text-lg font-extrabold">{info}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__ratings flex">
          {Array(ratings)
            .fill()
            .map((numberOfRating, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button
          className="bg-[#f0c14b] border border-solid mt-[10px] border-[#a88734]"
          onClick={removeFromBasket}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
