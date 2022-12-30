import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // faltaba este
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function App() {

  const [nombre, setNombre] = useState([])
  const [apellido, setApellido] = useState([]);
  const [posicion, setPosicion] = useState([]);
  const [numero, setNumero] = useState(1)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 const listaJugadores = []

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumero(numero + 1)
  }


  
  return (
    <>
      <Container className='text-center'>
        <h1 className='text-center text-success'>Lista de Jugadores</h1>

        <Button variant="outline-success" className='mb-3' onClick={handleShow}>Agregar</Button>{' '}

        
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name='nombre'
                value={nombre}
                onChange={(e) => { setNombre(e.target.value) }}
                placeholder="Lucas"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Londero"
                name='apellido'
                value={apellido}
                onChange={(e) => { setApellido(e.target.value) }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Posición</Form.Label>
              <Form.Control
                type="text"
                placeholder="Delantero"
                name='posicion'
                value={posicion}
                onChange={(e) => { setPosicion(e.target.value) }}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary"  type="submit">
            Enviar
          </Button>
          
        </Modal.Footer>
        <p>Resultado del formulario: {nombre} {apellido} {posicion}</p>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Número</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Posición</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{numero}</td>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{posicion}</td>
          </tr>


        </tbody>
      </Table>
    </>
  );
}

export default App;
