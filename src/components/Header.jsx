import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import godrejLogo from "../assets/logo.png";
import { Search, Mouse } from "react-bootstrap-icons";

const Header = () => {
  return (
    <Navbar sticky="top" bg="dark" className="headerWrap" expand="lg">
      <Container className="mx-4" fluid>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={godrejLogo}
                width="100%"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav
            className="d-flex my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Who We Are</Nav.Link>
            <Nav.Link href="#action2">What We Do</Nav.Link>
            <Nav.Link href="#action2">What We Offer</Nav.Link>
            <Nav.Link href="#action2">Archive Tales</Nav.Link>
            <Nav.Link href="#action2">Media</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            <Nav.Link href="#action2">Contribute</Nav.Link>
            <Nav.Link href="#action2">
              <Search />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
