import React, { Component } from "react";
import Summary from "../Summary/Summary";
import Total from "../Total/Total";
import "./Cart.css";

export default class Cart extends Component {
  render() {
    return (
      <section className="main_summary">
        <h3>Your Cart</h3>
        <Summary selected={this.props.selected} />
        <Total selected={this.props.selected} />
      </section>
    );
  }
}
