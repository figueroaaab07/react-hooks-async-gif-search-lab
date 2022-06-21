import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
  const [gifsUrl, setGifsUrl] = useState([]);
  const [search, setSearch] = useState("dolphin");
  const [searchTerm, setSearchTerm] = useState("dolphin");

  useEffect(() => {
   fetch(`https://api.giphy.com/v1/gifs/search?api_key=zDuzjYdgt6dhZBx6XD2RHfyVgXg0UcUI&q=${searchTerm}&limit=&offset=0&rating=g&lang=en`)
      .then((r) => r.json())
      .then((gifs) => {
        setGifsUrl(gifs.data.slice(0,3).map(gif => gif.images.original.url));
      })
  }, [searchTerm]);

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(event.target.querySelector("input").value);
  }

  const gifsToDisplay = gifsUrl.map((gifUrl) => <GifList key={uuid()} gifUrl={gifUrl} />)

  return (
    <div className="app">
      <ul>{gifsToDisplay}</ul>
      <GifSearch search={search} handleSearchChange={handleSearchChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default GifListContainer;
