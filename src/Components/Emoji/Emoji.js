import React, { useState } from "react";
import styled from "styled-components";
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
    <div style={{paddingTop:"10px"}}>
      <Input
        type="text"
        placeholder="search"
        //   value={query}
        onChange={search}
      ></Input>

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
              <div key={index} style={{ display: "flex", paddingTop: "10px",borderBottom:"1px solid red" }}>
                <p>{item.title}</p>
                <p>{item.symbol}</p>
              </div>
            );
          })}
    </div>
  );
}

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #bbb;
  box-sizing: border-box;
  font-size: 18px;
  padding: 10px 8px;
  width: 60%;
`;
