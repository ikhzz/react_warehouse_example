import { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, ListGroup, Modal, Nav, Navbar,Row, Stack, Toast, ToastContainer } from "react-bootstrap";
import bg from '../assets/image/background.jpg'
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { product, setProduct, createHistoryProduct, setCreateHistoryProduct, updateHistoryProduct, setUpdateHistoryProduct} = useContext(ProductContext)
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [newProduct, setNewProduct] = useState({price:0, product_name: "", stock:0})
  const [typeEdit, setTypeEdit] = useState("+")
  const [toEdit, setToEdit] = useState({id:0, price:0, product_name: "", stock:0})
  const [newValueEdit, setNewValueEdit] = useState({id:0, price:0, product_name: "", stock:0})


  const handleClose = () => setShow(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShow = () => setShow(true);
  const handleShowEdit = (types, id, price, product_name, stock) => {
    setToEdit({id, price, product_name, stock})
    setShowEdit(true)
    setTypeEdit(types)
  } 

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    handleClose()
    setShowToast(true)
    event.preventDefault();
    event.stopPropagation();
    // product process
    const productSlice = product
    productSlice.sort(function(a, b) { 
      return a.id - b.id ;
    });
    const lastid =productSlice[productSlice.length-1].id + 1
    const newData = {
      id : lastid,
      product_name: newProduct.product_name,
      price: newProduct.price,
      stock: newProduct.stock,
    }
    productSlice.push(newData)
    setProduct(productSlice)
    // history process create
    const idItem = createHistoryProduct.length + 1
    const currentItem = [...createHistoryProduct]
    console.log(currentItem)
    const history = {
      id: idItem,
      product_name: newProduct.product_name,
      price: newProduct.price,
      stock: newProduct.stock,
    }
    currentItem.push(history)
    setCreateHistoryProduct(currentItem)
  };

  const handleEditSubmit = () => {
    handleCloseEdit()
    setShowToast(true)
    let name = ''
    const productSlice = []
    for (const i of product) {
      if(i.id == toEdit.id) {
        switch(true) {
          case newValueEdit.price > 0:
            if(typeEdit == "+")
              i.price += parseInt(newValueEdit.price)
            else
              i.price -= newValueEdit.price
          case newValueEdit.stock > 0:
            if(typeEdit == "+")
              i.stock += parseInt(newValueEdit.stock)
            else
              i.stock -= newValueEdit.stock       
        }
        if(newValueEdit.product_name != ""){
          i.product_name = newValueEdit.product_name
        }
        name = i.product_name
      }
      productSlice.push(i)
    }
    setProduct(productSlice)
    // history process update
    const idItem = updateHistoryProduct.length + 1
    const currentItem = [...updateHistoryProduct]
    const history = {
      id: idItem,
      product_name: name,
      price: newValueEdit.price,
      stock: newValueEdit.stock,
      typeUpdate: typeEdit == "+" ? "Tambah" : "kurang"
    }
    currentItem.push(history)
    setUpdateHistoryProduct(currentItem)
    setNewValueEdit({id:0, price:0, product_name: "", stock:0})
  };

  const handleDelete = (id) => {
    const productSlice = []
    for (const i of product) {
      if(i.id != id) {
        productSlice.push(i)
      }
    }
        
    setProduct(productSlice)
  }

  return (
    <div className="home">
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container >
          <Navbar.Brand  href="#">Home</Navbar.Brand>  
          <Button onClick={handleShow} variant="primary">Tambah barang</Button>
        </Container>
      </Navbar>
      <Row xs={1} md={2} className="g-4">
        {product.slice(0).reverse().map((v, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={bg} />
              <Card.Body>
                <Card.Title>{v.product_name}</Card.Title>
                <ListGroup style={{rowGap:"10px"}}>
                  <ListGroup.Item>Stok : {v.stock}</ListGroup.Item>
                  <ListGroup.Item style={{borderTopWidth:1}}>Harga : Rp. {v.price}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Stack direction="horizontal" gap={2}>
                  <Button onClick={() => handleShowEdit("+", v.id, v.price, v.product_name, v.stock)} variant="primary">Tambah barang</Button>
                  <Button onClick={() => handleShowEdit("-", v.id, v.price, v.product_name, v.stock)} variant="primary">Kurangi barang</Button>
                  <Button onClick={() => handleDelete(v.id)} className="ms-auto" variant="danger">Hapus Barang</Button>
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* modal tambah barang */}
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control type="text" placeholder="Masukan nama barang" required value={newProduct.product_name}
              onChange={(e)=> setNewProduct(prev => ({...prev, product_name : e.target.value}))}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Harga barang</Form.Label>
              <Form.Control type="number" placeholder="Masukan harga barang" value={newProduct.price} min="1"
              onChange={(e)=> setNewProduct(prev => ({...prev, price : e.target.value}))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicStock">
              <Form.Label>Stock barang</Form.Label>
              <Form.Control type="number" placeholder="Masukan stock barang" value={newProduct.stock}  min="1"
              onChange={(e)=> setNewProduct(prev => ({...prev, stock : e.target.value}))}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Simpan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* edit barang */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit barang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control type="text" value={toEdit.product_name} disabled/>
            <Form.Control type="text" placeholder="Masukan nama barang" required value={newValueEdit.product_name}
            onChange={(e)=> setNewValueEdit(prev => ({...prev, product_name : e.target.value}))}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Harga barang</Form.Label>
            <Form.Control type="text" value={"Rp."+ toEdit.price} disabled/>
            <Form.Control type="number" placeholder="Masukan harga barang" value={newValueEdit.price} min="1"
            onChange={(e)=> setNewValueEdit(prev => ({...prev, price : e.target.value}))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicStock">
            <Form.Label>Stock barang</Form.Label>
            <Form.Control type="number" value={toEdit.stock} disabled/>
            <Form.Control type="number" placeholder="Masukan stock barang" value={newValueEdit.stock}  min="1"
            onChange={(e)=> setNewValueEdit(prev => ({...prev, stock : e.target.value}))}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleEditSubmit} variant="primary" type="submit">
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

      {/* toast */}    
      <ToastContainer className="p-3" position={"top-end"} >
        <Toast show={showToast} onClose={()=>setShowToast(false)}  delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Tambah barang berhasil</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}

export default Home;