import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import CartContext from '../../App.jsx';

function ProductItemForm(props) {
  const contexte = useContext(CartContext);
  return (
    <>
      <br></br>
      <Form.Control type="number" placeholder="Nombre Article(s)" />
      <br></br>
      <Button variant="primary" type="submit" onClick={contexte[1](
        { type: 'add', product: { id: props.id, name: props.name, price: props.price, quantity: 1 } }
      )}>
        Ajouter au panier
      </Button>

    </>
  );
}
export default ProductItemForm