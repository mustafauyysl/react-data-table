import React, { Component } from "react";
import TableItem from "./TableItem";

class TableBody extends Component {
  renderEmpytList = () => {
    return (
      <div className="row">
        <p className="col">Empyt List</p>
      </div>
    );
  };

  renderList = () => {
    let i = 1;
    return this.props.data.map((user) => (
      <TableItem
        userId={i++}
        userName={user.nameSurname}
        userPhone={user.phoneNumber}
        userEmail={user.email}
      />
    ));
  };

  render() {
    return this.props.data.length > 0
      ? this.renderList()
      : this.renderEmpytList();
  }
}

export default TableBody;
