import { useContext, useState } from "react";
import { Container, Navbar, Table, } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";


const History = () => {
  const { createHistoryProduct, updateHistoryProduct } = useContext(ProductContext)
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <div className="home">
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container >
          <Navbar.Brand  href="#">History</Navbar.Brand>  
        </Container>
      </Navbar>
      
      <div className="historyList">
      <Table striped bordered hover variant="dark">
      <thead>
        <tr><th colSpan={4}>history product di tambah</th></tr>
        <tr>
          <th>#</th>
          <th>nama produk</th>
          <th>harga</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        {createHistoryProduct && createHistoryProduct.slice(0).reverse().map((v, idx) => (
          <tr>
            <td>{v.id}</td>
            <td>{v.product_name}</td>
            <td>{v.price}</td>
            <td>{v.stock}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Table striped bordered hover variant="dark">
      <thead>
      <tr><th colSpan={5}>history produk di edit</th></tr>
        <tr>
          <th>#</th>
          <th>nama produk</th>
          <th>harga</th>
          <th>stock</th>
          <th>kondisi</th>
        </tr>
      </thead>
      <tbody>
        {updateHistoryProduct && updateHistoryProduct.slice(0).reverse().map((v, idx) => (
          <tr>
            <td>{v.id}</td>
            <td>{v.product_name}</td>
            <td>{v.price}</td>
            <td>{v.stock}</td>
            <td>{v.typeUpdate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default History;