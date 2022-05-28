import React, { Component } from "react";
import { NavDropdown, Badge } from "react-bootstrap";

export default class cartSummary extends Component {
  render() {
    return (
      <div>
        <NavDropdown title="Cart" id="basic-nav-dropdown">
          {this.props.cart.map((cartItem) => (
            <NavDropdown.Item href="#action/3.1" key={cartItem.product.id}>
              <Badge>{cartItem.quantity}</Badge>
              {cartItem.product.productName}
            </NavDropdown.Item>
          ))}
          <NavDropdown.Item href="#action/3.4">Reset</NavDropdown.Item>
        </NavDropdown>
      </div>
    );
  }
}
