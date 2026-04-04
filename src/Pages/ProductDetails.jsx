import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Constants/product";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  console.log(product);
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <h1>{product.category}</h1>
    </div>
  );
};

export default ProductDetails;
