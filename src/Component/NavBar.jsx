import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Links } from "../Constants/links";
import { ProductContext } from "../Context/ProductContext";

const NavBar = () => {
  const { count, setCount } = useContext(ProductContext);
  console.log(count);

  return (
    <div className="flex justify-between bg-blue-950 p-10 text-white">
      <div className="flex gap-3">
        <h1>Logo</h1>
        <p>🍔</p>
      </div>

      <ul className="flex justify-between gap-10  text-white">
        {Links.map((item) => (
          <li key={item.id} className="hover:bg-white hover:text-blue-900">
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
      <h1>{count}</h1>
      <button key={500} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default NavBar;
