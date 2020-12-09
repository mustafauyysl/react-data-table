import React, { Component } from "react";
import Button from "../toolbox/Button";
import { FaBars, FaBeer, FaTrash } from "react-icons/fa";

const actionsButton = [
  {
    backgroundColor: "#d9534f",
    icon: <FaTrash color="#fff" />,
  },
  {
    backgroundColor: "#337ab7",
    icon: <FaBars color="#fff" />,
  },
];

class TableItem extends Component {
  renderActionsButton = () => {
    return actionsButton.map((button) => (
      <Button backgroundColor={button.backgroundColor}>{button.icon}</Button>
    ));
  };

  render() {
    const { userId, userName, userPhone, userEmail } = this.props;
    return (
      <div
        className="row"
        style={{
          backgroundColor: userId % 2 != 0 ? "#f9f9f9" : "#ffffff",
        }}
      >
        <div className="col">
          <p>{userId}</p>
        </div>
        <div className="col">
          <p>{userName}</p>
        </div>
        <div className="col">
          <p>{userPhone}</p>
        </div>
        <div className="col">
          <p>{userEmail}</p>
        </div>
        <div className="col">{this.renderActionsButton()}</div>
      </div>
    );
  }
}

export default TableItem;
