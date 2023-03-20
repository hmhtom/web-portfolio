import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Linkedin, Envelope } from "react-bootstrap-icons";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTab } from "@/utils/personalSlice";

function Navigation() {
  const tabs = useSelector((state) => state.personalInfo.tabs);
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" className="user-select-none" sticky="top">
      <Container>
        <Nav className="me-auto">
          {tabs.map((tab) => (
            <Nav.Link
              onClick={() =>
                dispatch({
                  type: changeTab,
                  payload: tab,
                })
              }>
              {tab}
            </Nav.Link>
          ))}
        </Nav>
        <a
          href="https://www.linkedin.com/in/alex-he-1a7b5811a/"
          target="_blank"
          className="ms-3">
          <Linkedin color="royalblue" size={30} />
        </a>
        <a href="mailto:hmhtom@gmail.com" target="_blank" className="ms-3">
          <Envelope color="royalblue" size={30} />
        </a>
      </Container>
    </Navbar>
  );
}

export default Navigation;
