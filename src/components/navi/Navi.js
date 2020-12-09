import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  margin-bottom: 100px;
  background-color:#2196F3;
  text-align: center;
  padding: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

`

const Title = styled.h2`
  color: #fff;
  font-family: Arial;
`

function Navi() {
  return (
    <Nav>
      <Title>React.js - Data Table</Title>
    </Nav>
  )
}

export default Navi;