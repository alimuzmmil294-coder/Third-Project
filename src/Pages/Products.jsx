import React, { useContext } from "react";
import { products } from "../Constants/product";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
const Products = () => {
  const { count, setCount } = useContext(ProductContext);
  console.log(count);

  return (
    <div className="flex p-10 gap-10 justify-between rounded  border">
      {products.map((prod) => (
        <div className="border text-center p-5 rounded-[10px]">
          <h1>{prod.name}</h1>
          <h1>{prod.price}</h1>
          <h1 className="mb-4">{prod.category}</h1>
          <button onClick={() => setCount(count + 1)}></button>

          <NavLink
            to={`productDetails/${prod.id}`}
            className={
              "border rounded-[10px] bg-black text-white px-2.5 py-1.75 my-4"
            }
          >
            {" "}
            Details
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Products;
