import React from "react";
import "./Product.css";

const Product = ({id, title, price, rating, image }) => {

  return (
    <section key={id} className="product">
      <div className="product__info">
        <p>
            {title}
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}
        </div>
      </div>
      <img className="product__img"
        src={image}
        alt="product-image"
      />
      <button className="product__btn">Add To Cart</button>
    </section>
  );
};

export default Product;
