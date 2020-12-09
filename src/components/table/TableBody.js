import React, { Component } from "react";
import styled from "styled-components";
import TableItem from "./TableItem";

const EmpytContainer = styled.div`
  width: 100%;
  text-align: center;
  background-color: #f9f9f9;
  height: 50px;
  padding-top: 7px;
`

class TableBody extends Component {
  
  renderEmpytList = () => {
    return (
      <EmpytContainer>
        <p>Empyt List</p>
      </EmpytContainer>
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
