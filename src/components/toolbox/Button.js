import React from "react";

const Button = props => {
    return (
        <a className="button" style={{backgroundColor: props.backgroundColor}}>
            {props.children}
        </a>
    )
}

export default Button;