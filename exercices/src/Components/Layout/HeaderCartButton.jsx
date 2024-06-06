import Cart from '../Cart/Cart.jsx';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function headerCart() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Panier
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Panier</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, TU ES DANS LE PANIER!</Modal.Body>
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

