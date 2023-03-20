import React from "react";
import Col from "react-bootstrap/Col";
import { Image as Img } from "react-bootstrap";
import SkillTab from "./SkillTab";

function About() {
  return (
    <>
      <Col className=" p3 col-10 c col-lg-5 avatar">
        <Img className="w-100" src="/img/avatar.jpg" roundedCircle />
      </Col>
      <Col className="col-10 col-lg-5 text-light text-center user-select-none d-flex flex-column ">
        <h2 className="about">Alex He</h2>
        <h4 className="about">The software developer</h4>
        <SkillTab />
      </Col>
    </>
  );
}

export default About;
