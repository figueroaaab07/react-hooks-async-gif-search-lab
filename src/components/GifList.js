import React from "react";

function GifList({ gifUrl }) {
  
  return (
    <li className="gif">
      <img src={gifUrl} alt={"Gif"} />
    </li>
  );
}

export default GifList;
