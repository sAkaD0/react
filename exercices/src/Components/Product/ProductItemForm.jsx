import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../../App';

function ProductItemForm(props) {

  let contexte = useContext(CartContext);
  const cartButton = (event) => {
    event.preventDefault();
    if (event.target[0].value === '' || parseInt(event.target[0].value) <= 0) {
      event.target[0].value = 1;
    }
    else {
      event.target[0].value = event.target[0].value;
    }
    contexte[1]({ type: 'add', product: { id: props.id, name: props.name, price: props.price, quantity: parseInt(event.target[0].value) } });

  }

  return (
    <>
      <Form onSubmit={cartButton}>
        <Form.Control type="number" placeholder="Nombre Article(s)" />
        <Button variant="primary" type="submit" >
          Ajouter au panier
        </Button>
      </Form>
    </>
  );
}
export default ProductItemForm;