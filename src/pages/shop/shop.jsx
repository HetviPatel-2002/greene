import React from "react";
import products_data  from "./productList.jsx";
import  ProductCard  from "./ProductCard.jsx";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Greeen Ecommerce</h1>
      </div>

      <div className="products">
        {products_data.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </div>
  );
};
