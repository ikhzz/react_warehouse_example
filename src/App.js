import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import Navbar from "./component/Navbar";
import { ProductContextProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <BrowserRouter >
        <ProductContextProvider>
          <Container  className="container px-0 mx-0">
            <Navbar/>
          </Container>
        </ProductContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;