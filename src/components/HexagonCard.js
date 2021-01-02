import React from "react";

export default function HexagonCard({ title, icon }) {
  return (
    <div className="hexagon">
      <div className="hexagon_top"></div>
      <div className="hexagon_mid">
        <div className="hex_inner">
          <h4 style={{ marginBottom: "0" }}>{title}</h4>
          <img src={icon} alt={title} style={{ maxHeight: "50px" }} />
        </div>
      </div>
      <div className="hexagon_bottom"></div>
    </div>
  );
}
