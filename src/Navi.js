import React, { Component } from "react";
import CartSummary from "./CartSummary";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="http://localhost:3001/">
              Northwind App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="form1">Component</Link>
                </Nav.Link>
                <Nav.Link href="https://github.com/mcdemirrr">Github</Nav.Link>
                <CartSummary
                  cart={this.props.cart}
                  removeFromCart={this.props.removeFromCart}
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
