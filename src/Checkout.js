import React from "react";
import CheckoutProduct from "./checkoutProduct";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  //eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <Header />
      <div className="checkout flex p-[20px] bg-white h-max">
        <div className="checkout__left">
          <img
            className="w-full mb-[10px]"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <h1>Hello, {user?.email}</h1>
            <h1 className="mr-2.5 p-2.5 border-b border-solid border-gray-500">
              YOUR SHOPPING BASKET
            </h1>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  info={item.info}
                  image={item.image}
                  price={item.price}
                  ratings={item.ratings}
                />
              );
            })}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}
// mr-24 bg-[grey] w-1/2 -- checkout__left
// bg-sky-500 flex-1 -- checkout__right

export default Checkout;
