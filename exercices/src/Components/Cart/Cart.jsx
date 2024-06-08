import { useContext } from 'react';
import { CartContext } from '../../App';
import Button from 'react-bootstrap/Button';

function Cart() {
    let contexte = useContext(CartContext);
    console.log(contexte[0]);
    return (
        <>
            <div>
                <span>
                    {contexte[0].map((product) => (
                        <p key={product.id}>
                            {product.name} - {product.price}€ - {product.quantity}
                            <Button variant="primary" onClick={() => contexte[1]({ type: 'remove', product })}>Supprimer</Button>
                        </p>
                    ))}
                </span>
            </div>
        </>
    )
}

export default Cart