import TableContainer from "../table/index";
import {Container} from 'reactstrap';
import Navi from "../navi/Navi";


function App() {
  return (
    <>
      <Navi />
      <Container>
        <TableContainer />
      </Container>
    </>


  );
}

export default App;
