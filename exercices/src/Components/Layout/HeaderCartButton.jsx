import Cart from '../Cart/Cart.jsx';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { CartContext } from '../../App';

function headerCart() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let contexte = useContext(CartContext);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Panier
                {contexte[0].reduce((acc, product) => acc + parseInt(product.quantity), 0)}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Panier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Cart />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Commander
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default headerCart;

