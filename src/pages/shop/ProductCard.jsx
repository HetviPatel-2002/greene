import React, { useState } from "react";
import "./productCard.css";

const ProductCard = (props) => {
  const { id, name, price, productImage,credit } = props.data;

  // State to keep track of the cart item count
  const [cartItemCount, setCartItemCount] = useState(0);

  // Function to handle adding to cart
  const addToCart = () => {
    setCartItemCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="product">
      <img src={productImage} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="material-description">xyz</p>
        <p className="price">${price}</p>
        <div className="score-container">
          <span className="score-label">Green Score:</span>
          <div className="green-score">{credit}</div>
        </div>
        <button className="add-to-cart-button" onClick={addToCart}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
