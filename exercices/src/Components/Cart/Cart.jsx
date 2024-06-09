import { useContext } from 'react';
import { CartContext } from '../../App';
import Button from 'react-bootstrap/Button';

import "../../index.css";


function Cart() {
    let contexte = useContext(CartContext);
    console.log(contexte[0]);
    return (
        <>
            <div id="headerPanier">
                <div>Reférence</div>
                <div>Nom article</div>
                <div>Prix article</div>
                <div>Quantité</div>
            </div>
            <div>
                <span>
                    {contexte[0].map((product) => (
                        <p key={product.id}>
                            {product.id} - {product.name} - {product.price}€ - {product.quantity}
                            <Button variant="primary" onClick={() => contexte[1]({ type: 'remove', product })}>Supprimer</Button>
                        </p>
                    ))}
                </span>
            </div>
            <div id="total">
                cart total : {contexte[0].reduce((acc, product) => acc + parseFloat(product.price) * product.quantity, 0)}€
            </div>
        </>
    )
}

export default Cart