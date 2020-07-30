import React from "react";
import { Row } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
import { FaDrawPolygon } from "react-icons/fa";
import Heading from "../Heading/Heading";
import HexagonCard from "../HexagonCard";

export default function Services() {
  return (
    <div className="bg-orange">
      <div class="container ">
        <Heading title="Our Digital Ecosystem" white="true" />
        <Row className="flex justify-content-center ">
          <HexagonCard title="E-Commerce" icon={MdAddShoppingCart} />
          <HexagonCard title="Digital Marketing" icon={AiFillWechat} />
          <HexagonCard title="Web Development" icon={FaDrawPolygon} />
        </Row>
        <Row className="flex justify-content-center hexagon_row">
          <HexagonCard title="E-Commerce" icon={MdAddShoppingCart} />
          <HexagonCard title="Digital Marketing" icon={MdAddShoppingCart} />
        </Row>
        <Row className="flex justify-content-center hexagon_row">
          <HexagonCard title="E-Commerce" icon={MdAddShoppingCart} />
        </Row>
      </div>
    </div>
  );
}
