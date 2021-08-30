import React from "react";
class HonerdBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.img}
          alt={this.props.description}
          title={this.props.title}
        />
        <p>{this.props.describtion}</p>
      </div>
    );
  }
}
export default HonerdBeast;
