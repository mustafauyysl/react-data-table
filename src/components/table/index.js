import React, { Component } from "react";
import TextInput from "../toolbox/TextInput";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { connect } from "react-redux";
import TableFooter from "./TableFooter";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  }

  searchUser = () => {
    let text = this.state.userName.toLowerCase();
    const newArray = [];
    this.props.users.map((x) => {
      if (x.nameSurname.toLowerCase().match(text)) {
        newArray.push(x);
      }
    });
    return newArray;
  };

  render() {
    return (
      <>
        <TextInput
          placeHolder="Filter by name..."
          onChange={this.handleChange}
          value={this.state.userName}
        />
        <TableHeader />
        <TableBody data={this.searchUser()} />
        <TableFooter />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
  };
}

export default connect(mapStateToProps)(TableContainer);
