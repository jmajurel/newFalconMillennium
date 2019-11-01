import React, { Component } from "react";
import "./Tooltip.css";
class Tooltip extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
    const inLineStyles = {
      top: `${this.props.yPosition}px`,
      left: `${this.props.xPposition}px`
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div
        className="Tooltip"
        style={{
          top: `${this.props.yPosition}px`,
          left: `${this.props.xPposition}px`
        }}
      >
        <h5>Name: {this.props.selection ? this.props.selection.name : ""}</h5>
        <p>btrtrtrrhbrtrrtjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhbrt</p>
      </div>
    );
  }
}

export default Tooltip;
