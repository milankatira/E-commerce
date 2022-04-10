import React from "react";
import { useState } from "react";
import './Search.css'
const Search = ({history}) => {
  const [keyword, setKeyword] = useState();
  const submitSearchHandler = (e) => {
    e.preventDefault();

    console.log(history)
    if (keyword.trim()) {
      history.push(`products/${keyword}`);
    } else {
      history.push("products");
    }
  };
  return (
    <>
      <form className="searchBox" onSubmit={submitSearchHandler}>
        <input
          type="text"
          placeholder="search a product ..."
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default Search;
