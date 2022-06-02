import React, { Component } from "react";
import { NavDropdown, Badge } from "react-bootstrap";
import { NavItem, NavLink } from "reactstrap";

export default class cartSummary extends Component {
  renderSummary() {
    return (
      <NavDropdown title="Cart" id="basic-nav-dropdown">
        {this.props.cart.map((cartItem) => (
          <NavDropdown.Item href="#action/3.1" key={cartItem.product.id}>
            <Badge>{cartItem.quantity}</Badge>
            <Badge
              color="danger"
              onClick={() => this.props.removeFromCart(cartItem.product)}
            >X</Badge>
            {cartItem.product.productName}
          </NavDropdown.Item>
        ))}
        <NavDropdown.Item href="#action/3.4">Reset</NavDropdown.Item>
      </NavDropdown>
    );
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
