import React from "react";

export default function HexagonCard({ title, icon }) {
  return (
    <div className="hexagon">
      <div className="hexagon_top"></div>
      <div className="hexagon_mid">
        <div className="hex_inner">
          <h3>{title}</h3>
          {icon}
        </div>
      </div>
      <div className="hexagon_bottom"></div>
    </div>
  );
}
