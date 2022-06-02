import React, { Component } from "react";
import CartSummary from "./CartSummary"
import {
  Navbar,
  Nav,
  Container} from  'react-bootstrap';
export default class Navi extends Component {
  render() {
    return (
      <div>
      <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Northwind App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Component</Nav.Link>
            <Nav.Link href="https://github.com/mcdemirrr">Github</Nav.Link>
            <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
    );
  }
}
