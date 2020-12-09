import React, { Component } from 'react';
import {connect} from 'react-redux';

class TableFooter extends Component{
    render() {
        return (
            <div id="tableFooter">
                <p>Total: {this.props.users.length}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users
    }
}


export default connect(mapStateToProps)(TableFooter);