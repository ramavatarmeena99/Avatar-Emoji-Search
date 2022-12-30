import React from "react";
import { dataEmoji } from "../Data/DataEmoji";

export default function Emoji() {
  return (
    <div>
      {dataEmoji.map((i, index) => {
        return (
          <div style={{ border: "1px solid black", display: "flex" }}>
            <p>{i.symbol}</p>
            <p>{i.title}</p>
          </div>
        );
      })}
    </div>
  );
}
