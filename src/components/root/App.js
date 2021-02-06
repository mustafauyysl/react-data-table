import TableContainer from "../table/index";
import Navi from "../navi/Navi";
import GlobalStyle from "../../assets/css/global";
import styled from "styled-components";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navi />
      <Container>
        <TableContainer />
      </Container>
    </>
  );
}

export default App;
