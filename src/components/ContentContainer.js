import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";

import About from "./contents/About";
import Projects from "./contents/Projects";
import Contact from "./contents/Contact";
import Nav from "./Nav";

function ContentContainer() {
  const currentTab = useSelector((state) => state.personalInfo.currentTab);

  const renderPage = () => {
    switch (currentTab) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Nav />
      <Row className="justify-content-center bg-dark user-select-none">
        {renderPage()}
      </Row>
    </>
  );
}

export default ContentContainer;
