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
    <FullPage>
      <Input
        type="text"
        placeholder="search"
        onChange={search}
      ></Input>

      {searchInput.length > 1
        ? filterResult.map((i, index) => {
            return (
              <ForEmoji key={index}>
                <ForEmojiSymbol>{i.symbol}</ForEmojiSymbol>
                <FOrEmojiTitle> {i.title}</FOrEmojiTitle>
              </ForEmoji>
            );
          })
        : dataEmoji.map((item, index) => {
            return (
              <ForEmoji key={index}>
                <ForEmojiSymbol>{item.symbol}</ForEmojiSymbol>
                <FOrEmojiTitle>{item.title}</FOrEmojiTitle>
              </ForEmoji>
            );
          })}
    </FullPage>
  );
}

const FullPage = styled.div`
padding-top: 10px;
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #bbb;
  box-sizing: border-box;
  font-size: 18px;
  padding: 10px 8px;
  width: 60%;
`;

const ForEmoji = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid #bbb;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const ForEmojiSymbol = styled.p`
  font-size: 19px;
`;

const FOrEmojiTitle = styled.p`
  padding-left: 10px;
  font-size: 19px;
`;
