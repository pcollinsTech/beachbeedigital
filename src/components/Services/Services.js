import React from "react";
import { Container, Row } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
import { FaDrawPolygon } from "react-icons/fa";
import Heading from "../Heading/Heading";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className="bg-orange">
      <div class="container ">
        <Heading title="Our Digital Ecosystem" white="true" />
        <Row>
          <ul id="hexGrid">
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <img
                    src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
                    alt=""
                  />
                  <h1>This is a title</h1>
                  <p>
                    Some sample text about the article this hexagon leads to
                  </p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div className="hex_inner">
                    <MdAddShoppingCart />
                    <br />
                    <br />
                    Eccommerce
                  </div>
                  <h1>This is a title</h1>
                  <p>
                    Some sample text about the article this hexagon leads to
                  </p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <img
                    src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
                    alt=""
                  />
                  <h1>This is a title</h1>
                  <p>
                    Some sample text about the article this hexagon leads to
                  </p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <img
                    src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
                    alt=""
                  />
                  <h1>This is a title</h1>
                  <p>
                    Some sample text about the article this hexagon leads to
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </Row>
        <Row className="text-center py-5 d-flex justify-content-around">
          <div className="col-sm-4 service">
            <h3>E-Commerce</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              architecto laudantium ullam harum possimus
            </p>
          </div>
          <div className="col-sm-4 service">
            <AiFillWechat />
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              architecto laudantium ullam harum possimus
            </p>
          </div>
          <div className="col-sm-4 service">
            <FaDrawPolygon />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              architecto laudantium ullam harum possimus
            </p>
          </div>
        </Row>
      </div>
    </div>
  );
}
