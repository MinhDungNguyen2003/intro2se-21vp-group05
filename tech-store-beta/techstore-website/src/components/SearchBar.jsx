import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../features/product/productSlice";

const types = ["iphone", "samsung", "oppo", "lenovo", "macbook", "akko"];

export default function SearchBar() {
  const [activeSearch, setActiveSearch] = useState([]);
  const [showActiveSearch, setShowActiveSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const searchedProducts = useSelector(
  //   (state) => state.product.searchedProducts
  // );
  // const error = useSelector((state) => state.message);

  useEffect(() => {
    return () => setActiveSearch([]);
  }, []);

  const handleChangeKeyword = (e) => {
    const value = e.target.value;
    setKeyword(value);
    setActiveSearch(types.filter((type) => type.includes(value)).slice(0, 8));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("keyword ", keyword);
    dispatch(searchProducts(keyword));
    navigate("/search-product");
  };

  const handleSearchInputClick = () => {
    setShowActiveSearch(true);
  };

  const handleSearchInputBlur = () => {
    setShowActiveSearch(false);
  };

  return (
    <form className=" w-96 relative min-w-[250px]" onSubmit={handleSubmit}>
      <div className=" relative">
        <input
          type="search"
          placeholder="Search..."
          className=" w-full p-4 rounded-full"
          onChange={handleChangeKeyword}
          value={keyword}
          onClick={handleSearchInputClick}
          onBlur={handleSearchInputBlur}
        />
        <button
          type="submit"
          className=" absolute right-1 top-1/2 -translate-y-1/2 bg-gray-400 rounded-full p-3"
        >
          <SearchIcon />
        </button>
      </div>

      {showActiveSearch && activeSearch.length > 0 && (
        <div className=" absolute bg-gray-400 w-full top-16 p-4 rounded-xl flex flex-col gap-2 left-1/2 -translate-x-1/2 z-50 ">
          {activeSearch.map((s) => (
            <span className=" hover:bg-gray-500 hover:rounded-lg hover:px-2 cursor-pointer">
              {s}
            </span>
          ))}
        </div>
      )}
    </form>
  );
}
