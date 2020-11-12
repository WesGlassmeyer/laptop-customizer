import React, { Component } from "react";
import "./Total.css";

export default class Total extends Component {
  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );
    return (
      <div className="summary_total">
        <div className="summary_total_label">Your Price:</div>
        <div className="summary_total_value">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(total)}
        </div>
      </div>
    );
  }
}
