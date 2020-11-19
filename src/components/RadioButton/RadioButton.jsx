import React from "react";
import { render } from "react-dom";

class RadioButton extends React.Component {

  render() {
    const items = this.props.options.map((item,index) =>
    <label key={index} className={`hw-radio-button ${this.props.full ? "hw-radio-button--full" : ""} ${this.props.bounding ? "hw-radio-button--bounding" : ""}`}>
    <input type="radio" 
    name={this.props.name} 
    value={item.value} 
    defaultChecked={this.props.selected == item.value ? true : false}
    onChange={this.props.onChange}
    />
    <span className="hw-radio-button__label">{item.label}</span>
    <i className="hw-radio-button__indicator"></i>
    </label>
  );

  return (
    <div>{items}</div>

  );
}
}

export default RadioButton;
