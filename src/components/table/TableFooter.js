import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Footer = styled.div`
  margin-top: 20px;
`;

class TableFooter extends Component {
  render() {
    return (
      <Footer>
        <p>Total: {this.props.users.length}</p>
      </Footer>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
  };
}

export default connect(mapStateToProps)(TableFooter);
