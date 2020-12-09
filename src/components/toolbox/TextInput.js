import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
  text-align: right;
  margin-bottom: 20px;
`

const Input = styled.input`
  border: 2px solid #ddd;
  border-radius: 7px;
  height: 30px;
`

const TextInput = ({ name, onChange, placeHolder, value }) => {

  return (
    <InputBox>
        <Input
          type="text"
          name={name}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        ></Input>
    </InputBox>
  );
};

export default TextInput;
