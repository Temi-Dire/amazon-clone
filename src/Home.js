import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home flex justify-center ml-auto mr-auto max-w-[1500px]">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        />
        <div className="home__row flex ml-[5px] mr-[5px] -mt-[150px]">
          <Product
            info="Slick: one of the best product we have"
            price="$100"
            ratings={3}
            image={
              "https://www.shutterstock.com/image-illustration/orange-small-sleeping-lamp-3d-260nw-2160802949.jpg"
            }
          />
          <Product
            info={"Slick: one of the best product we have"}
            price={"$100"}
            ratings={2}
            image={
              "https://www.shutterstock.com/image-illustration/orange-small-sleeping-lamp-3d-260nw-2160802949.jpg"
            }
          />
          {/* Product */}
        </div>
        <div className="home__row flex ml-[5px] mr-[5px">
          <Product
            info={"Slick: one of the best product we have"}
            price={"$100"}
            ratings={5}
            image={
              "https://www.shutterstock.com/image-illustration/orange-small-sleeping-lamp-3d-260nw-2160802949.jpg"
            }
          />
          <Product
            info={"Slick: one of the best product we have"}
            price={"$100"}
            ratings={3}
            image={
              "https://www.shutterstock.com/image-illustration/orange-small-sleeping-lamp-3d-260nw-2160802949.jpg"
            }
          />
          <Product
            info={"Slick: one of the best product we have"}
            price={"$100"}
            ratings={1}
            image={
              "https://www.shutterstock.com/image-illustration/orange-small-sleeping-lamp-3d-260nw-2160802949.jpg"
            }
          />
        </div>
        <div className="home__row flex ml-[5px] mr-[5px">
          <Product
            info={"Slick: one of the best product we have"}
            price={"$100"}
            ratings={5}
            image={
              "https://www.shutterstock.com/image-illustration/orange-small-sleeping-lamp-3d-260nw-2160802949.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
