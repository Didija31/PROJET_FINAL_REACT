import React from "react";
import "./Components/style.css";
import Product from "./Components/product";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
function App() {
  return (
    <div className="app">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="cont">
          <Navbar.Brand className="brand">
            <img
              src="https://i.pinimg.com/originals/ef/8d/7e/ef8d7e61df497a7f2eb94076ec84c98f.jpg"
              alt=""
              height="100"
            />
            Baking Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link">Accueil</Nav.Link>
              <Nav.Link className="link">Nous Contacter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
