import React, { Component } from "react";
import Button from "../toolbox/Button";
import { FaBars, FaBeer, FaTrash } from "react-icons/fa";
import styled from "styled-components";

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

const TableBody = styled.div`
  & {
    background-color: ${(props) =>
      props.userId % 2 != 0 ? "#f9f9f9" : "#ffffff"};
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 992px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

const TableData = styled.div`
  & {
    float: left;
    width: 20%;
    text-align: center;
    height: 60px;
  }
  @media screen and (max-width: 992px) {
    & {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: left;
      width: 100%;
    }
    &:before {
      float: left;
      font-weight: bold;
      width: 50%;
    }
    &:last-child {
      border-bottom: 0;
    }
    &:nth-of-type(1):before {
      content: "ID: ";
      font-family: Arial;
    }
    &:nth-of-type(2):before {
      content: "Name Surname: ";
      font-family: Arial;
    }
    &:nth-of-type(3):before {
      content: "Phone Number: ";
      font-family: Arial;
    }
    &:nth-of-type(4):before {
      content: "Email: ";
      font-family: Arial;
    }
    &:nth-of-type(5):before {
      content: "Actions: ";
      font-family: Arial;
    }
  }
`;

class TableItem extends Component {
  renderActionsButton = () => {
    return actionsButton.map((button) => (
      <Button backgroundColor={button.backgroundColor}>{button.icon}</Button>
    ));
  };

  render() {
    const { userId, userName, userPhone, userEmail } = this.props;
    return (
      <TableBody userId={userId}>
        <TableData>
          <p>{userId}</p>
        </TableData>
        <TableData>
          <p>{userName}</p>
        </TableData>
        <TableData>
          <p>{userPhone}</p>
        </TableData>
        <TableData>
          <p>{userEmail}</p>
        </TableData>
        <TableData>{this.renderActionsButton()}</TableData>
      </TableBody>
    );
  }
}

export default TableItem;
