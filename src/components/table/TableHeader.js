import React, { Component } from "react";
import styled from "styled-components";

const TableHead = styled.div`
  & {
    width: 100%;
    text-align: center;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const TableItem = styled.div`
  float: left;
  width: 20%;
`;

class TableHeader extends Component {
  render() {
    return (
      <TableHead>
        <TableItem className="col">
          <p>#</p>
        </TableItem>
        <TableItem className="col">
          <p>Name Surname</p>
        </TableItem>
        <TableItem className="col">
          <p>Phone Number</p>
        </TableItem>
        <TableItem className="col">
          <p>Email</p>
        </TableItem>
        <TableItem className="col">
          <p>Actions</p>
        </TableItem>
      </TableHead>
    );
  }
}

export default TableHeader;
