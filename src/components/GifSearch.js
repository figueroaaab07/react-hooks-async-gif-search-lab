import React from "react";

function GifSearch({ search, handleSearchChange, handleSubmit }) {

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label>Enter a Search Term:
        <input
          className="searchInput"
          type="text" 
          value={search}
          onChange={handleSearchChange}
        />
      </label><br></br><br></br><br></br>
      <button type="submit">Find Gifs</button>

    </form>
  )
}

export default GifSearch;
