import React from "react";

const TextInput = ({ name, onChange, placeHolder, value }) => {

  return (
    <div id="searchBox">
        <input
          id="searchInput"
          type="text"
          name={name}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        ></input>
    </div>
  );
};

export default TextInput;
