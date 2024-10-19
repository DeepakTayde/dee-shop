import React from "react";
import "./Home.css";
import Product from "../product/Product";

const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <img
          src="https://www.kindpng.com/picc/m/557-5577291_ecommerce-development-bottom-banner-commerce-banner-png-transparent.png"
          alt="bannerImage"
          className="home__image"
        />
        <article className="home__row">
          <Product
            id="1234"
            title="ASUS ROG Azoth 75% Wireless DIY Custom Gaming Keyboard, OLED Display,
          Three-Layer Dampening, Hot-Swappable ROG NX Snow Switches & Keyboard
          Stabilizers"
            price={11.3}
            rating={5}
            image="https://m.media-amazon.com/images/I/810Jo2bHccL._AC_SL1500_.jpg"
          />

          <Product
            id="1235"
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs (Blue)"
            price={23.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61CGHv6kmWL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </article>
        <article className="home__row">
          <Product
            id="12345"
            title="Lee Womens Ultra Lux Comfort with Flex Motion Straight Leg Jean"
            price={26.97}
            rating={3}
            image="https://m.media-amazon.com/images/I/61J9jpggTeL._AC_SY550_.jpg"
          />

          <Product
            id="12346"
            title="DouBCQ Women's Casual Long Sleeve Flowy Pleated Fall Dresses with Pockets"
            price={29.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51o6zYshn7L._AC_SX466_.jpg"
          />

          <Product
            id="12347"
            title="Bruno Marc Men's Casual Dress Oxfords Shoes Business Formal Derby Sneakers"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ZqekXeCmL._AC_SY575_.jpg"
          />
        </article>
        <article className="home__row">
          <Product
            id="12349"
            title="LG UltraGear QHD 34-Inch Curved Gaming Monitor 34GP63A-B, VA with HDR 10 Compatibility and AMD FreeSync Premium, 160Hz, Black"
            price={329.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81soN3bwVFL._AC_SL1500_.jpg"
          />
        </article>
      </div>
    </section>
  );
};

export default Home;
