import React, { useEffect, useRef } from "react";

const SearchBar = () => {
  const SearchRef = useRef(null);

  useEffect(() => {
    SearchRef.current.focus();
  }, []);

  const handleClick = () => {
    SearchRef.current.focus();
  };

  return (
    <div className=" flex flex-col gap-3 mt-5 text-center">
      <p>Hello, This is SearchBar Component</p>
      <input
        type="search"
        name=""
        ref={SearchRef}
        id=""
        className="border p-3"
        placeholder="Search 1..."
      />
      <input
        type="search"
        name=""
        id=""
        className="border p-3"
        placeholder="Search 2..."
      />
      <input
        type="search"
        name=""
        id=""
        className="border p-3"
        placeholder="Search 3..."
      />
      <input
        type="search"
        name=""
        id=""
        className="border p-3"
        placeholder="Search 4..."
      />
      <button
        onClick={handleClick}
        className="border p-4 text-center rounded-2xl"
      >
        Focus on Search 1
      </button>
    </div>
  );
};

export default SearchBar;
