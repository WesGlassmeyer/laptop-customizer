import React, { Component } from "react";
import "./Summary.css";

export default class Summary extends Component {
  render() {
    return Object.keys(this.props.selected).map((key) => {
      return (
        <div className="summary_option" key={key}>
          <div className="summary_option_label">{key}</div>
          <div className="summary_option_value">
            {this.props.selected[key].name}
          </div>
          <div className="summary_option_cost">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(this.props.selected[key].cost)}
          </div>
        </div>
      );
    });
  }
}
