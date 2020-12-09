import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-left: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.backgroundColor};
  margin-top: 10px;
`;

class MyButton extends Component {
  render() {
    return (
      <Button backgroundColor={this.props.backgroundColor}>
        {this.props.children}
      </Button>
    );
  }
}

export default MyButton;
