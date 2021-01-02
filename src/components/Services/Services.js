import React from "react";
import { Row } from "react-bootstrap";
import Heading from "../Heading/Heading";
import HexagonCard from "../HexagonCard";

import camera from "../../assets/images/icons/camera.svg";
import design from "../../assets/images/icons/design.svg";
import server from "../../assets/images/icons/server.svg";
import programmer from "../../assets/images/icons/programmer.svg";
import marketing from "../../assets/images/icons/marketing.svg";
import ecommerce from "../../assets/images/icons/ecommerce.svg";

export default function Services() {
  return (
    <div className="bg-orange">
      <div className="container">
        <Heading title="Our Digital Ecosystem" white="true" />
        <Row className="flex justify-content-center ">
          <HexagonCard title="E-Commerce" icon={ecommerce} />
          <HexagonCard title="Marketing" icon={marketing} />
          <HexagonCard title="Development" icon={programmer} />
        </Row>
        <Row className="flex justify-content-center hexagon_row">
          <HexagonCard title="Graphic Design" icon={design} />
          <HexagonCard title="Photography" icon={camera} />
        </Row>
        <Row className="flex justify-content-center hexagon_row">
          <HexagonCard title="Support" icon={server} />
        </Row>
      </div>
    </div>
  );
}
