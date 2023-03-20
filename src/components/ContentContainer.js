import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";

import About from "./contents/About";
import Projects from "./contents/Projects";
import Nav from "./Nav";

function ContentContainer() {
  const currentTab = useSelector((state) => state.personalInfo.currentTab);

  const renderPage = () => {
    switch (currentTab) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Nav />
      <Row className="justify-content-center bg-dark user-select-none">
        {renderPage()}
        <h6></h6>
      </Row>
    </>
  );
}

export default ContentContainer;
