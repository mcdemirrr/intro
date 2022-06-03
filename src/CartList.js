import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th>{cartItem.product.id}</th>
              <th>{cartItem.product.categoryId}</th>
              <th>{cartItem.product.productName}</th>
              <th>{cartItem.product.unitPrice}</th>
              <th>{cartItem.product.unitsInStock}</th>
              <th>{cartItem.quantity}</th>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
