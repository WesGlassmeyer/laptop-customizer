import React, { Component } from "react";
import "./FeatureOption.css";

export default class FeatureOption extends Component {
  render() {
    return (
      <li className="feature_item">
        <div
          className={this.props.featureClass}
          onClick={(e) =>
            this.props.onSelect(this.props.featureName, this.props.item)
          }
        >
          {this.props.item.name}(
          {new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
          }).format(this.props.item.cost)}
          )
        </div>
      </li>
    );
  }
}
