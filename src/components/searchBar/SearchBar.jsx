import { useState } from "react";
import { Link } from "react-router-dom";
import "./searchBar.scss";

const types = ["buy", "rent"];

const SearchBar = () => {
  
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({
      ...prev,
      type: val,
    }));
  };
 

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City location" />
        <input
          type="text"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Minimum Price"
        />
        <input
          type="text"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Maximum Price"
        />
        <button>
          <Link to="/list">
            <img src="/search.png" alt="" />
          </Link>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
