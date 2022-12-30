import React, { useState } from "react";
import { dataEmoji } from "../Data/DataEmoji";

export default function Emoji() {
  const [searchInput, setSearchInput] = useState("");
  const [filterResult, setFilterResult] = useState([]);
  const search = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "") {
      const filterData = dataEmoji.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilterResult(filterData);
    } else {
      setFilterResult(dataEmoji);
    }
  };
  return (
    <div>
      <input
        style={{ width: "60%", height: "50px", fontSize: "18px",borderRadius:"4px",  border: "1px solid #bbb",  padding: "10px 8px"

      }}
        type="text"
        placeholder="search"
        //   value={query}
        onChange={search}
      ></input>

      {searchInput.length > 1
        ? filterResult.map((i, index) => {
            return (
              <div
                key={index}
                style={{ border: "1px solid black", display: "flex" }}
              >
                <p>{i.symbol}</p>
                <p>{i.title}</p>
              </div>
            );
          })
        : dataEmoji.map((item, index) => {
            return (
              <div key={index} style={{ display: "flex", paddingTop: "10px" }}>
                <p>{item.title}</p>
                <p>{item.symbol}</p>
              </div>
            );
          })}
    </div>
  );
}
