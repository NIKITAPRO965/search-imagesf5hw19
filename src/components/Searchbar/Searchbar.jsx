import { useState } from "react";

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(query);
    onSearch(query);
    setQuery("");
  };
  return (
    <>
      <header className="searchbar">
        <form onSubmit={handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={(evt) => setQuery(evt.target.value)}
            value={query}
            className="input"
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}

export default Searchbar;
